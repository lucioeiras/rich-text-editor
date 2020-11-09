<template>
  <Editor />
  <Footer />
</template>

<script>
  import Editor from './components/Editor';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Editor,
      Footer,
    }
  }
</script>

<style lang="scss">
  #app {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 64px 0;
  }
</style>
