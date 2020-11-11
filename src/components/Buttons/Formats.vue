<template>
  <div class="formats">
    <button 
      class="bold" 
      @click="toogleAction('bold', null)"
    >B</button>

    <button 
      class="italic" 
      @click="toogleAction('italic', null)"
    >I</button>

    <button 
      class="underlined" 
      @click="toogleAction('underline', null)"
    >U</button>
  </div>
</template>

<script>
  import toogleAction from '../../utils/toogleAction'

  export default {
    name: 'Formats',

    methods: {
      toogleAction
    },
  }
</script>

<style lang="scss" scoped>
  .formats {
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

    .bold {
      font-weight: 700;
    }

    .italic {
      font-style: italic;
    }

    .underlined {
      text-decoration-line: underline;
    }
  }
</style>