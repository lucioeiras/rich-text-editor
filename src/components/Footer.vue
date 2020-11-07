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

<style>
  footer {
    display: flex;
    align-items: center;

    margin-top: 80px;
  }

  footer img {
    width: 32px;
    height: 32px;

    margin-right: 8px;
  }

  footer p {
    color: var(--text);
    font-size: 20px;
    font-weight: 300;
  }

  footer p a {
    color: var(--text);
  }
</style>