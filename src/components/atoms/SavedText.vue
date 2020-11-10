<template>
  <div class="saved-text">
    <div ref="text" class="content"></div>
  </div>
</template>

<script>
  export default {
    name: 'SavedText',

    props: {
      content: String,
    },

    mounted() {
      this.$refs.text.innerHTML = this.content;
    }
  }
</script>

<style lang="scss">
  .saved-text {
    cursor: pointer;

    border-radius: 8px;
    background: $card-background;

    padding-bottom: 24px;

    transition: 0.3s ease;

    &:hover {
      transform: scale(1.05, 1.05);
    }

    .content {
      position: relative;

      height: 100%;
      max-height: 240px;

      overflow: hidden;
      padding: 24px;

      opacity: 0.5;
      transition: 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>