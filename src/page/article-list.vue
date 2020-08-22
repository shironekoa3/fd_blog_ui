<template>
  <section>
    <div class="container">
      <div tag="div" class="article-boxes">
        <my-article-box
          class="my-article-box"
          :article="item"
          v-for="(item,i) in articles"
          :key="i"
          :data-index="i"
        ></my-article-box>
      </div>
    </div>
  </section>
</template>

<script>
  import MyArticleBox from "../components/MyArticleBox";
  import MyAnimation from "../components/MyAnimation";

  export default {
    name: "article-list",
    data() {
      return {
        articles: [],
      }
    },
    mounted() {
      this.articles = this.getArticles();
    },
    watch: {
      $route() {
        console.log(this.$route.query["id"]);
      }
    },
    components: {
      "my-article-box": MyArticleBox,
      "my-animation": MyAnimation
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .article-boxes {
    flex: 1;
    /*overflow: hidden;*/
  }

  .my-article-box {
    margin-top: 10px;
    transition: all .3s;
  }

  .my-article-box:hover {
    box-shadow: 0 8px 15px rgba(146, 146, 146, .39);
  }

  .my-article-box:nth-child(1) {
    margin-top: 0;
  }

  @media screen and (max-width: 800px) {
    .article-boxes {
      width: 100%;
    }
  }

</style>
