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

<style>
  .bold {
    font-weight: 700;
  }

  .italic {
    font-style: italic;
  }

  .underlined {
    text-decoration-line: underline;
  }
</style>