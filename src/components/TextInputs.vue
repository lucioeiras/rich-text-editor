<template>
  <div id="text-inputs">
    <input />
  </div>
</template>

<script>
  export default {
    name: 'TextInputs',
  }
</script>

<style lang="scss">
  #text-inputs {
    display: flex;
    flex-direction: column;

    input {
      border: none;
      background: none;

      color: $text;
      font-size: 20px;

      padding: 4px 0;
    }
  }
</style>