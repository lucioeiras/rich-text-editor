<template>
  <div class="saved-texts">
    <h1>Seus textos</h1>
    <TextList />
  </div>
</template>

<script>
  import TextList from '../molecules/TextList';

  export default {
    name: 'Saved',

    components: {
      TextList,
    }
  }
</script>

<style lang="scss">
  .saved-texts {
    width: 100%;
    max-width: 1100px;

    margin-top: 96px;
    padding-bottom: 72px;

    h1 {
      color: $titles;
      font-size: 48px;
      font-weight: 900;

      margin-bottom: 32px;
    }
  }
</style>