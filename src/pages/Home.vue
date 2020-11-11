<template>
  <div id="home">
    <PageTitle 
      title="Escreva o seu texto"
      text="Ir para os textos salvos"
      page="/texts"
    />

    <Editor />
  </div>
</template>

<script>
  import PageTitle from '../components/PageTitle'
  import Editor from '../components/Editor';

  export default {
    name: 'Home',
    
    components: {
      PageTitle,
      Editor,
    }
  }
</script>

<style lang="scss">
  #home {
    width: 100%;
    max-width: 1100px;

    padding: 64px 0;
  }
</style>
