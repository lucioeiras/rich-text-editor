<template>
  <Header />
  <Editor />
  <Saved />
</template>

<script>
  import Header from '../organisms/Header';
  import Editor from '../organisms/Editor';
  import Saved from '../organisms/Saved';

  export default {
    name: 'Home',
    
    components: {
      Editor,
      Header,
      Saved,
    }
  }
</script>

<style lang="scss"></style>
