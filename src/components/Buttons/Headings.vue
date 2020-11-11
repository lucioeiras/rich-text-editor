<template>
  <div class="headings">
    <button @click="toogleAction('formatblock', 'h1')">H1</button>
    <button @click="toogleAction('formatblock', 'h2')">H2</button>
    <button @click="toogleAction('formatblock', 'h3')">H3</button>
    <button @click="toogleAction('formatblock', 'p')">P</button>
  </div>
</template>

<script>
  import toogleAction from '../../utils/toogleAction'

  export default {
    name: 'Headings',

    methods: {
      toogleAction,
    }
  }
</script>

<style lang="scss" scoped>
  .headings {
    button {
      cursor: pointer;

      border: none;
      background: none;

      color: $actions;
      font-size: 24px;

      &:not(:first-child) {
        margin-left: 48px;
      }

      &:hover {
        color: $primary;
      }
    }
  }
</style>