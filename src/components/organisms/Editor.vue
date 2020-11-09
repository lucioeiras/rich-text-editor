<template>
  <div id="editor">
    <Actions />

    <div 
      ref="editor" 
      id="text-editor" 
      contenteditable="true" 
      @paste="(e) => preventPaste(e)"
    ></div>
  </div>
</template>

<script>
  import Actions from '../molecules/Actions'
  import formatPaste from '../../utils/formatPaste'

  export default {
    name: 'Editor',

    components: { Actions },

    methods: {
      preventPaste(e) {
        formatPaste(e)
      },
    },

    mounted() {
      this.$refs.editor.focus();
    },
  }
</script>

<style lang="scss" scoped>
  #editor {
    width: 100%;
    max-width: 960px;
  }

  #text-editor {
    min-height: 560px;

    border-radius: 0 0 8px 8px;
    background: $editor;

    color: $text;
    font-size: 20px;

    padding: 40px;
  }

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
</style>