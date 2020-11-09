<template>
  <div id="editor">
    <div id="actions">
      <button class="title">T</button>
      <button class="bold">B</button>
      <button class="italic">I</button>
      <button class="underlined">U</button>
      <button class="code">&lt;&gt;</button>
      <button class="list">●</button>
      <button class="quote">"</button>
    </div>
    <hr>
    <div id="text-inputs" v-bind:key="index"  v-for="(line, index) in lines">
      <input
        :ref="String(index)"
        v-model="line.value"
        @keyup.enter="goToNextLine(index)"
        :class="[
          line.isTitle && 'title',
          line.isBold && 'bold',
          line.isItalic && 'italic',
          line.isUnderlined && 'underlined'
        ]"
      />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Editor',

    data() {
      return {
        lines: []
      }
    },

    methods: {
      goToNextLine(line) {
        if (line === this.lines.length - 1) {
          this.addLine();
        }

        const nextLine = String(line + 1);
        this.$refs[nextLine].focus();
      },

      addLine() {
        this.lines.push({ 
          value: '',
          isTitle: false,
          isBold: false,
          isItalic: false,
          isUnderlined: false,
        });
      },
    },

    mounted() {
      for (let i = 0; i < 10; i++) this.addLine();
    },
  }
</script>

<style lang="scss">
  #editor {
    width: 100%;
    max-width: 960px;

    border-radius: 8px;
    background: $card;

    padding: 40px;

    hr {
      height: 2px;

      border: none;
      border-radius: 2px;

      background: $divider;

      margin: 20px 0 32px 0;
    }
  }

  #actions {
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
    }
  }

  #text-inputs {
    display: flex;
    flex-direction: column;

    input {
      border: none;
      background: none;

      color: $text;
      font-size: 20px;

      padding: 4px 0;
    }

    .title {
      font-size: 48px;
      font-weight: 900;
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
</style>