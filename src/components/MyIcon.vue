<template>
  <i :class="'iconfont '+icon">
    <slot></slot>
  </i>
</template>

<script>
  import "../assets/font/iconfont.css"

  export default {
    name: "MyIcon",
    props: {
      icon: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
</style>
