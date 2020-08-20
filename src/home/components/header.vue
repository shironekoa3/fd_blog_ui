<template>
  <header>
    <div class="container">
      <h2><a href="/" v-text="title"></a></h2>
      <nav>
        <router-link
          :to="item.url"
          v-for="(item,i) in menuItem"
          v-text="item.text"
          :key="i"
        ></router-link>
      </nav>
      <div class="drawer" @click="drawer=!drawer" style="transform: scale(2)">
        <my-icon :icon="drawer?'icon-close':'icon-icon_menu'"/>
      </div>
    </div>
    <my-drawer
      :show.sync="drawer"
      :menuItem="menuItem"
    ></my-drawer>
  </header>
</template>

<script>
  import MyDrawer from "../../components/MyDrawer";

  export default {
    data() {
      return {
        title: "Zvoid' Blog",
        drawer: false,
        menuItem: [
          {text: "首页", url: "/"},
          {text: "文档", url: "/"},
          {text: "标签", url: "/"},
          {text: "归档", url: "/"},
          {text: "常用网站", url: "/"},
          {text: "友情链接", url: "/"}
        ]
      }
    },
    methods: {},
    components: {
      "my-drawer": MyDrawer
    }
  }
</script>

<style scoped>

  header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 a {
    font-family: Georgia, sans-serif !important;
    color: #404040;
    font-size: 25px;
    font-weight: bold;
    line-height: 1.5em;
  }

  a:hover {
    color: #2d8cf0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav a {
    color: #60656A;
    font-size: 17px;
    margin-left: 25px;
  }

  .drawer {
    display: none;
    cursor: pointer;
    user-select: none;
  }

  @media screen and (max-width: 650px) {
    nav {
      display: none;
    }

    .drawer {
      display: block;
    }
  }
</style>
