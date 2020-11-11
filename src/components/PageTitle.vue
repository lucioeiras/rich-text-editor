<template>
  <div id="page-title">
    <h1>{{ title }}</h1>

    <router-link :to="page">{{ text }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'PageTitle',

    props: {
      title: String,
      text: String,
      page: String,
    }
  }
</script>

<style lang="scss" scoped>
  #page-title {
    display: flex;
    justify-content: space-between;

    margin-bottom: 32px;

    h1 {
      color: $primary;
      font-size: 56px;
      font-weight: 900;
    }

    a {
      align-self: flex-end;

      color: $texts;
      font-size: 20px;
      font-weight: 300;

      margin-bottom: 10px;
    }
  }
</style>