<template>
  <Home />
</template>

<script>
  import Home from './components/templates/Home'

  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 48px 0;
  }
</style>
