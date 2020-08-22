<template>
  <footer>
    <p>博客已运行 <span>2385天22小时56分47秒</span>.</p>
    <p>
      样式设计参考: <a href="https://github.com/DIYgod/hexo-theme-sagiri" target="_blank">Sagari</a>
      | Made with <font-awesome-icon class="icon-heart" icon="heart" /> <a href="/">Zvoid</a>.
    </p>
    <p>由 VUE 和 SpringMVC 框架制作.</p>
  </footer>
</template>

<script>
  export default {}
</script>

<style scoped>
  footer {
    width: 100%;
    height: 130px;
    background-color: #232323;
    margin-top: 40px;
    font-size: 14px;
    line-height: 1.5;
    color: #888;
    text-align: center;
    padding: 20px 0;
    overflow: hidden;
  }

  footer p {
    margin: 5px 0;
  }

  footer p a,
  .icon-heart
  {
    color: #ab3300;
  }

  footer p a:hover,
  .icon-heart:hover
  {
    color: #ff4d00;
    border-bottom-color: #222;
  }
</style>
