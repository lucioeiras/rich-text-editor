<template>
  <div class="text-card">
    <div 
      ref="text" 
      class="content" 
      @click="handleNavigateToEditor()"
    ></div>
  </div>
</template>

<script>
  export default {
    name: 'TextCard',

    props: {
      index: Number,
      content: String,
    },

    methods: {
      handleNavigateToEditor() {
        this.$router.push(`/edit/${this.index}`)
      }
    },

    mounted() {
      this.$refs.text.innerHTML = this.content;
    }
  }
</script>

<style lang="scss" scoped>
  .text-card {
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

      color: $texts;

      overflow: hidden;
      padding: 24px;

      opacity: 0.5;
      transition: 0.3s ease;

      &:hover {
        opacity: 1;
      }

      h1, h2, h3 {
        color: $titles !important;
      }
    }
  }
</style>