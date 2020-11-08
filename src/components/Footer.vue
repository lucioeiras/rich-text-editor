<template>
  <footer>
    <img alt="Vue" src="../assets/logo.png">
    <p>
      Criado com Vue.js por 
      <a href="https://www.github.com/lucioeiras" target="_blank">
        Diego Eiras.
      </a>
    </p>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<style lang="scss">
  footer {
    display: flex;
    align-items: center;

    margin-top: 80px;

    img {
      width: 32px;
      height: 32px;

      margin-right: 8px;
    }

    p {
      color: $text;
      font-size: 20px;
      font-weight: 300;

      a {
        color: $text-secondary;
      }
    }
  }
</style>