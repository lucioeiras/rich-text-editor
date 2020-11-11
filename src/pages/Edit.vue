<template>
  <div id="edit">
    <PageTitle 
      title="Edite o seu texto"
      text="Ir para os textos salvos"
      page="/texts"
    />

    <Editor :textIndex="text" />
  </div>
</template>

<script>
  import PageTitle from '../components/PageTitle'
  import Editor from '../components/Editor';

  export default {
    name: 'Edit',
    
    components: {
      PageTitle,
      Editor,
    },

    data() {
      return {
        text: this.$route.params.text,
      }
    }
  }
</script>

<style lang="scss">
  #edit {
    width: 100%;
    max-width: 1100px;

    padding: 64px 0;
  }
</style>
