<template>
  <header>
    <img alt="Vue" src="../../assets/logo.png">
    <p>
      Criado com Vue.js por 
      <a href="https://www.github.com/lucioeiras" target="_blank">
        Diego Eiras.
      </a>
    </p>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="scss">
  header {
    display: flex;
    align-items: center;

    margin-bottom: 48px;

    img {
      width: 32px;
      height: 32px;

      margin-right: 8px;
    }

    p {
      color: $texts;
      font-size: 20px;
      font-weight: 300;

      a {
        color: $texts;
      }
    }
  }
</style>