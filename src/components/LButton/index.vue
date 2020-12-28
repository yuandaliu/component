<template>
  <div class="btn">
      <button class="l-btn" :class="[type ? 'l-btn-' + type : '',size ? 'l-btn-' + size : '']">
          <slot />
      </button>
  </div>
</template>

<script>
export default {
  name: 'LButton',
  data () {
    return {
      'l-btn': false
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    }
  },

  created () {},

  methods: {}
}
</script>

<style lang='less'>
  .btn {
    .l-btn {
      display: inlinee-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #cccccc;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }

    .l-btn-primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }

    .l-btn-success {
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }

    .l-btn-info {
      color: #fff;
      background-color: #909399;
      border-color: #909399;
    }
        
    .l-btn-warning {
      color: #fff;
      background-color: #ebb563;
      border-color: #ebb563;
    }

    .l-btn-danger {
      color: #fff;
      background-color: #f78989;
      border-color: #f78989;
    }

    .l-btn-mini {
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
    }

    .l-btn-medium {
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
    }

    .l-btn-large {
      padding: 15px 25px;
      font-size: 14px;
      border-radius: 5px;
    }
  }
</style>
