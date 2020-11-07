<template>
  <div id="container">
    <div class="actions">
      <button class="title">T</button>
      <button class="bold">B</button>
      <button class="italic">I</button>
      <button class="underline">U</button>
      <button class="code">&lt;&gt;</button>
      <button class="list">●</button>
      <button class="quote">"</button>
    </div>

    <hr>

    <div class="editor">
      <input />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Editor',
  }
</script>

<style>
  :root {
    --primary: #43B883;
    --card: #141b24;
    --text: #fff;
    --secondary-text: #9ba7b6;
    --divider: #2f3a47;
  }

  #container {
    width: 100%;
    max-width: 960px;

    min-height: 640px;

    border-radius: 8px;
    background: var(--card);

    padding: 40px;
  }

  .actions button {
    cursor: pointer;

    border: none;
    background: none;

    color: var(--secondary-text);
    font-size: 24px;
  }

  .actions button:not(:first-child) {
    margin-left: 48px;
  }

  .actions button:hover {
    color: var(--primary);
  }

  .actions .bold {
    font-weight: 700;
  }

  .actions .italic {
    font-style: italic;
  }

  .actions .underline {
    text-decoration-line: underline;
  }

  #container hr {
    height: 2px;

    border: none;
    border-radius: 2px;

    background: var(--divider);

    margin: 20px 0 32px 0;
  }

  .editor {
    display: flex;
    flex-direction: column;
  }

  .editor input {
    border: none;
    background: none;

    color: var(--text);
    font-size: 20px;

    padding: 4px 0;
  }
</style>