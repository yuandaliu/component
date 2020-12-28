<template>
  <div class="home">
    <div class="btn-style">
      <span>基础按钮样式：</span>
      <l-button size="mini" type="primary" @click.native="getInfoHandle">基础按钮小</L-button>
      <l-button size="medium" @click.native="getInfoHandle">默认按钮中</L-button>
      <l-button size="large" type="success" @click.native="getInfoHandle">成功按钮大</L-button>
      <l-button size="medium" type="warning" @click.native="getInfoHandle">警告按钮中</L-button>
      <l-button size="mini" type="danger" @click.native="getInfoHandle">危险按钮小</L-button>
      <l-button size="large" type="info" @click.native="getInfoHandle">信息按钮大</L-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    getInfoHandle (event) {
      console.log(event.target.outerText)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .btn-style {
    display: flex;
    align-items: center;
  }
}
</style>
