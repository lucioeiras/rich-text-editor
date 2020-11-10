<template>
  <div id="editor">
    <Actions />

    <div 
      ref="editor" 
      id="text-editor" 
      contenteditable="true" 
      @paste="(e) => preventPaste(e)"
    ></div>

    <button class="save" @click="saveText()">Salvar</button>
  </div>
</template>

<script>
  import Actions from '../molecules/Actions'

  import formatPaste from '../../utils/formatPaste'
  import getSavedTexts from '../../utils/getSavedTexts'

  export default {
    name: 'Editor',

    components: { Actions },

    methods: {
      preventPaste(e) {
        formatPaste(e)
      },

      saveText() {
        const savedTexts = getSavedTexts();
        const text = this.$refs.editor.innerHTML;

        savedTexts.push(text);

        localStorage.setItem(
          'savedTexts', 
          savedTexts.map(text => text + '////k////'),
        );

        this.$refs.editor.focus();
        this.$refs.editor.innerHTML = '<p></p>';
      },
    },

    mounted() {
      this.$refs.editor.focus();
      this.$refs.editor.innerHTML = '<p></p>';
    },
  }
</script>

<style lang="scss">
  #editor {
    width: 100%;
    max-width: 960px;

    #text-editor {
      min-height: 560px;

      border-radius: 0 0 8px 8px;
      background: $editor-background;

      padding: 40px;

      color: $texts;
      font-size: 20px;

      h1 {
        color: $titles;
        font-size: 48px;
      }

      h2 {
        color: $titles;
        font-size: 40px;
      }

      h3 {
        color: $titles;
        font-size: 32px;
      }
    }

    .save {
      cursor: pointer;

      width: 100%;
      max-width: 960px;

      height: 56px;

      border: none;
      border-radius: 8px;
      background: $primary;

      color: $buttons;
      font-size: 24px;
      font-weight: 900;

      margin-top: 32px;

      transition: background-color 0.2s;

      &:hover {
        background: $primary-darker;
      }
    }
  }
</style>