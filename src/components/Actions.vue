<template>
  <button class="title">T</button>
  <button class="bold">B</button>
  <button class="italic">I</button>
  <button class="underline">U</button>
  <button class="code">&lt;&gt;</button>
  <button class="list">●</button>
  <button class="quote">"</button>
</template>

<script>
  export default {
    name: 'Actions',
  }
</script>

<style lang="scss">
  button {
    cursor: pointer;

    border: none;
    background: none;

    color: $buttons;
    font-size: 24px;

    &:not(:first-child) {
      margin-left: 48px;
    }

    &:hover {
      color: $primary;
    }

    .bold {
      font-weight: 700;
    }

    .italic {
      font-style: italic;
    }

    .underline {
      text-decoration-line: underline;
    }
  }
</style>