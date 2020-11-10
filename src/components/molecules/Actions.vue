<template>
  <div id="actions">
    <Headings />
    <Formats />
    <Aligns />
  </div>
</template>

<script>
  import Headings from '../atoms/Headings';
  import Formats from '../atoms/Formats';
  import Aligns from '../atoms/Aligns';

  export default {
    name: 'Actions',

    components: {
      Headings,
      Formats,
      Aligns,
    },
  }
</script>

<style lang="scss">
  #actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: $actions-background;

    border-radius: 8px 8px 0 0;
    padding: 24px 40px;

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