<template>
  <div id="editor">
    <div id="actions">
      <div class="heading">
        <button @click="toogleAction('formatblock', 'h1')">H1</button>
        <button @click="toogleAction('formatblock', 'h2')">H2</button>
        <button @click="toogleAction('formatblock', 'h3')">H3</button>
        <button @click="toogleAction('formatblock', 'p')">P</button>
      </div>

      <div class="text">
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

      <div class="align">
        <button @click="toogleAction('justifyleft', null)">
          <AlignLeft 
            :color="isHover[0] ? '#43B883' : '#6D7786'" 
            @mouseenter="isHover[0] = true"
            @mouseleave="isHover[0] = false"
          />
        </button>
        <button @click="toogleAction('justifycenter', null)">
          <AlignCenter 
            :color="isHover[1] ? '#43B883' : '#6D7786'" 
            @mouseenter="isHover[1] = true"
            @mouseleave="isHover[1] = false"
          />
        </button>
        <button @click="toogleAction('justifyright', null)">
          <AlignRight
            :color="isHover[2] ? '#43B883' : '#6D7786'" 
            @mouseenter="isHover[2] = true"
            @mouseleave="isHover[2] = false"
          />
        </button>
        <button @click="toogleAction('justifyfull', null)">
          <AlignJustify 
            :color="isHover[3] ? '#43B883' : '#6D7786'"  
            @mouseenter="isHover[3] = true"
            @mouseleave="isHover[3] = false"
          />
        </button>
      </div>
    </div>

    <div 
      ref="editor" 
      id="text-editor" 
      contenteditable="true" 
      @paste="(e) => preventPaste(e)"
    ></div>
  </div>
</template>

<script>
  import AlignLeft from '../components/icons/AlignLeft'
  import AlignCenter from '../components/icons/AlignCenter'
  import AlignRight from '../components/icons/AlignRight'
  import AlignJustify from '../components/icons/AlignJustify'

  import formatPaste from '../utils/formatPaste'

  export default {
    name: 'Editor',

    components: {
      AlignLeft,
      AlignCenter,
      AlignRight,
      AlignJustify
    },

    data() {
      return {
        isHover: [false, false, false, false]
      }
    },

    methods: {
      toogleAction(action, value) {
        document.execCommand(action, false, value);
      },

      preventPaste(e) {
        formatPaste(e)
      },
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
  }

  #actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: $actions;

    border-radius: 8px 8px 0 0;
    padding: 24px 40px;

    .align {
      max-height: 24px;
    }

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

      img {
        width: 24px;
        height: 24px;

        color: $buttons;
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

  #text-editor {
    min-height: 560px;

    border-radius: 0 0 8px 8px;
    background: $editor;

    color: $text;
    font-size: 20px;

    padding: 40px;
  }

  h1 {
    color: $titles;
    font-size: 48px;
  }

  h2 {
    color: $titles;
    font-size: 40px;
  }

  h3 {
    color: $titles;
    font-size: 32px;
  }
</style>