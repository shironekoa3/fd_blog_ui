<template>
  <div :class="{'drawer-box': true, 'drawer-box-show': show}" @click="$emit('update:show', !show)">
    <div class="drawer-menu">
      <router-link class="drawer-menu-item" :to="item.url" v-text="item.text"
         v-for="(item,i) in menuItem" :key="i"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyDrawer",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      menuItem: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .drawer-box {
    width: 0;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 70px;
  }

  .drawer-box-show {
    width: 100%;
  }

  .drawer-menu {
    width: 30%;
    white-space: nowrap;
    position: absolute;
    right: 0;
    text-align: center;
  }

  .drawer-menu-item {
    display: block;
    margin: 10px 0;
    color: #000;
    background-color: rgba(0, 0, 0, .1);
    padding: 5px;
  }

</style>
