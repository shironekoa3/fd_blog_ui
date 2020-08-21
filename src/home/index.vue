<template>
  <div>
    <my-header></my-header>
    <my-main style="margin-top: -150px"></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
  const header = () => import("./components/header");
  const main = () => import("./components/main");
  const footer = () => import("./components/footer");

  export default {
    components: {
      "my-header": header,
      "my-main": main,
      "my-footer": footer
    }
  }
</script>

<style>
header>.container>nav,
section>.container,
main>.container
{
  width: 75%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
}

header,
div,
h2,
a,
nav
{
  transition: all .3s;
}

@media screen and (max-width: 800px) {
  header>.container>nav,
  section>.container,
  main>.container
  {
    width: 100%;
  }
}
</style>
