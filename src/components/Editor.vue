<template>
  <div id="editor">
    <div id="actions" >
      <button 
        v-bind:key="index" 
        v-for="(action, index) in actions"
        :class="action.class"
        @click="action.onClick"
      >{{ action.display }}</button>
    </div>

    <hr>

    <div ref="editor" class="text-editor" contenteditable="true"></div>
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
            onClick: () => this.toogleAction('formatblock', 'h1'),
          },
          {
            display: 'B',
            class: 'bold',
            onClick: () => this.toogleAction('bold', null),
          },
          {
            display: 'I',
            class: 'italic',
            onClick: () => this.toogleAction('italic', null),
          },
          {
            display: 'U',
            class: 'underlined',
            onClick: () => this.toogleAction('underline', null),
          },
        ],
      }
    },

    methods: {
      toogleAction(action, value) {
        document.execCommand(action, false, value);
      }
    },

    mounted() {
      this.$refs.editor.focus();
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

  .text-editor {
    height: 320px;

    color: $text;
    font-size: 20px;
  }
</style>