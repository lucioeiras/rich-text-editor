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

<style>
  :root {
    --background: #0b0f13;
    --text: #caddf1;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--background);
  }

  body, input, button, textarea {
    font-family: Roboto Slab, serif;
  }

  #app {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
