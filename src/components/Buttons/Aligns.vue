<template>
  <div class="aligns">
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

    <button @click="toogleAction('justifyfull')">
      <AlignJustify 
        :color="isHover[3] ? '#43B883' : '#6D7786'"  
        @mouseenter="isHover[3] = true"
        @mouseleave="isHover[3] = false"
      />
    </button>
  </div>
</template>

<script>
  import AlignLeft from '../icons/AlignLeft'
  import AlignCenter from '../icons/AlignCenter'
  import AlignRight from '../icons/AlignRight'
  import AlignJustify from '../icons/AlignJustify'

  import toogleAction from '../../utils/toogleAction'

  export default {
    name: 'Aligns',

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
      toogleAction,
    },
  }
</script>

<style lang="scss" scoped>
  .aligns {
    max-height: 24px;

    button {
      cursor: pointer;

      border: none;
      background: none;

      color: $actions;
      font-size: 24px;

      &:not(:first-child) {
        margin-left: 48px;
      }

      img {
        width: 24px;
        height: 24px;

        color: $buttons;
      }
    }
  }
</style>