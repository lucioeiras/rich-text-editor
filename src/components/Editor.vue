<template>
  <div id="editor">
    <div id="actions" >
      <button 
        v-bind:key="index" 
        v-for="(action, index) in actions"
        :class="[
          action.class,
          action.isActive && 'active'
        ]"
        @click="action.onClick"
      >{{ action.display }}</button>
    </div>

    <hr>

    <div id="text-inputs">
      <input
        v-bind:key="index"  
        v-for="(line, index) in lines"
        v-model="line.value"

        @keyup.enter="goToNextLine(index)"
        @keyup.delete="removeLine(index)"
        @focus="getFocus(index)"

        :ref="String(index)"
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
        actions: [
          {
            display: 'T',
            class: 'title',
            onClick: () => this.toogleAction('isTitle'),
            isActive: false,
          },
          {
            display: 'B',
            class: 'bold',
            onClick: () => this.toogleAction('isBold'),
            isActive: false,
          },
          {
            display: 'I',
            class: 'italic',
            onClick: () => this.toogleAction('isItalic'),
            isActive: false,
          },
          {
            display: 'U',
            class: 'underlined',
            onClick: () => this.toogleAction('isUnderlined'),
            isActive: false,
          },
        ],
        lines: []
      }
    },

    methods: {
      addLine() {
        this.lines.push({ 
          value: '',
          focus: false,

          isTitle: false,
          isBold: false,
          isItalic: false,
          isUnderlined: false,
        });
      },

      goToNextLine(lineIndex) {
        if (lineIndex === this.lines.length - 1) {
          this.addLine();
        }

        const nextLine = String(lineIndex + 1);
        this.$refs[nextLine].focus();
      },

      removeLine(lineIndex) {
        if (
          this.lines[lineIndex].value === '' 
          && this.lines.length > 1
        ) {
          this.lines.splice(lineIndex, 1);

          const previousLine = String(lineIndex - 1);
          this.$refs[previousLine].focus();
        }
      },

      getFocus(lineIndex) {
        this.lines.map((line, index) => {
          if (line.focus) {
            line.focus = false;
          }

          if (lineIndex === index) {
            line.focus = true;
          }

          return line;
        });
      },

      toogleAction(action) {
        this.lines.map(line => {
          if (line.focus) {
            line[action] = !line[action];
          }

          return line;
        });
      }
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

    .active {
      color: $primary;
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