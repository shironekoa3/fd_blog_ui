<template>
  <header>
    <div class="container">
      <nav>
        <router-link class="nav-link" to="/">
          <font-awesome-icon icon="home"/>
          首页
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 500px;
    background: url("https://cdn.jsdelivr.net/gh/shironekoa3/cdn@master/images/background.jpg");
    /*filter: brightness(90%);*/
  }

  .container {
    width: 100%;
    height: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, .3), transparent);
  }

  nav {
    height: 60px;
    line-height: 60px;
  }

  .nav-link {
    color: #ffffff;
    display: inline-block;
    height: 100%;
    width: 100px;
    font-size: 16px;
    transition: all .3s;
  }

  .nav-link:hover {
    color: #2d8cf0;
  }

</style>
