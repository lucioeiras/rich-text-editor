<template>
  <div id="editor">
    <Actions />
    <hr>
    <TextInputs />
  </div>
</template>

<script>
  import Actions from './Actions'
  import TextInputs from './TextInputs'

  export default {
    name: 'Editor',
    components: {
      Actions,
      TextInputs,
    }
  }
</script>

<style lang="scss">
  #editor {
    width: 100%;
    max-width: 960px;

    min-height: 640px;

    border-radius: 8px;
    background: $card;

    padding: 40px;

    hr {
      height: 2px;

      border: none;
      border-radius: 2px;

      background: $divider;

      margin: 20px 0 32px 0;
    }
  }
</style>