<template>
  <div id="saved-texts">
    <PageTitle 
      title="Textos salvos"
      text="Escrever um novo texto"
      page="/"
    />

    <div class="text-list">
      <TextCard 
        v-for="(text, index) in savedTexts"
        :key="index"
        :content="text"
        :index="index" 
      />
    </div>
  </div>
</template>

<script>
  import PageTitle from '../components/PageTitle';
  import TextCard from '../components/TextCard';
  
  import getSavedTexts from '../utils/getSavedTexts';

  export default {
    name: 'Saved',

    components: {
      PageTitle,
      TextCard,
    },

    data() {
      return {
        savedTexts: getSavedTexts(),
      }
    },
  }
</script>

<style lang="scss">
  #saved-texts {
    width: 100%;
    height: 100%;
    max-width: 1100px;

    padding: 64px 0;

    .text-list {
      width: 100%;
      max-width: 1100px;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;

      padding-bottom: 64px;
    }
  }
</style>