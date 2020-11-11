<template>
  <div id="editor">
    <div class="actions">
      <Headings />
      <Formats />
      <Aligns />
    </div>

    <div 
      ref="editor" 
      class="text-editor" 
      contenteditable="true" 
      @paste="(e) => formatPaste(e)"
    ></div>

    <button class="save" @click="handleNavigateToTexts()">Salvar</button>
  </div>
</template>

<script>
  import Headings from './Buttons/Headings';
  import Formats from './Buttons/Formats';
  import Aligns from './Buttons/Aligns';

  import formatPaste from '../utils/formatPaste'
  import getSavedTexts from '../utils/getSavedTexts'

  export default {
    name: 'Editor',

    components: { 
      Headings,
      Formats,
      Aligns,
    },

    props: {
      textIndex: String,
    },

    data() {
      return {
        formatPaste,
      }
    },

    methods: {
      createNewText() {
        if (this.$refs.editor.innerHTML !== '<p></p>') {
          const savedTexts = getSavedTexts();
          const text = this.$refs.editor.innerHTML;

          savedTexts.push(text);

          localStorage.setItem(
            'savedTexts', 
            savedTexts.map(text => text + '////k////'),
          );
        }
      },

      saveText() {
        if (this.$refs.editor.innerHTML !== '<p></p>') {
          let savedTexts = getSavedTexts();
          savedTexts[Number(this.textIndex)] = this.$refs.editor.innerHTML;

          localStorage.setItem(
            'savedTexts', 
            savedTexts.map(text => text + '////k////'),
          );
        }
      },

      handleNavigateToTexts() {
        this.$router.push('/texts');
      },
    },

    mounted() {
      if (this.textIndex) {
        const savedTexts = getSavedTexts();
        const textToEdit = savedTexts[Number(this.textIndex)];

        this.$refs.editor.innerHTML = textToEdit;
      }
      else {
        this.$refs.editor.innerHTML = '<p></p>';
      }

      this.$refs.editor.focus();
    },

    beforeUnmount() {
      this.textIndex ? this.saveText() : this.createNewText();
    }
  }
</script>

<style lang="scss" scoped>
  #editor {
    width: 100%;
    max-width: 1100px;

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background: $actions-background;

      border-radius: 8px 8px 0 0;
      padding: 24px 40px;
    }

    .text-editor {
      min-height: 480px;

      border-radius: 0 0 8px 8px;
      background: $editor-background;

      padding: 40px;

      color: $texts;
      font-size: 20px;

      h1, h2, h3 {
        color: $titles;
      }

      p {
        color: $texts;
      }
    }

    .save {
      cursor: pointer;

      width: 100%;
      height: 56px;

      border: none;
      border-radius: 8px;
      background: $primary;

      color: $buttons;
      font-size: 24px;
      font-weight: 900;

      margin-top: 40px;

      transition: background-color 0.2s;

      &:hover {
        background: $primary-darker;
      }
    }
  }
</style>