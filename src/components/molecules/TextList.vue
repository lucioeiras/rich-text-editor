<template>
  <div class="text-list">
    <SavedText 
      v-bind:key="index"
      v-for="(text, index) in savedTexts"
      :content="text" 
    />
  </div>
</template>

<script>
  import SavedText from '../atoms/SavedText'
  import getSavedTexts from '../../utils/getSavedTexts'

  export default {
    name: 'TextList',

    components: {
      SavedText,
    },

    data() {
      return {
        savedTexts: getSavedTexts(),
      }
    },
  }
</script>

<style lang="scss">
  .text-list {
    width: 100%;
    max-width: 1100px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
</style>