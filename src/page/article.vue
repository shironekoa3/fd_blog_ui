<template>
  <section>
    <div class="container">
      <my-article-detail-box
        class="my-article-detail-box"
        id="my-article-detail-box"
        :article="article"
      />
      <my-article-nav class="my-article-nav" ></my-article-nav>
    </div>
  </section>
</template>

<script>
  import MyArticleDetailBox from "../components/MyArticleDetailBox";
  import MyArticleNav from "../components/MyArticleNav";


  export default {
    props: ['id'],
    data() {
      return {
        scrollTop: 0,
        article: {}
      }
    },
    mounted() {
      this.article = this.getArticleById(this.id);
      setTimeout(() => {
        this.scrollAnimation(320, 20);
      }, 100);
    },
    components: {
      "my-article-detail-box": MyArticleDetailBox,
      "my-article-nav": MyArticleNav,
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    position: relative;
  }

  .my-article-detail-box {
    flex: 1;
    overflow: hidden;
  }

  .my-article-nav {
    width: 320px;
    margin-left: 20px;
    overflow: hidden;
  }


  @media screen and (max-width: 800px) {
    .my-article-detail-box {
      width: 100%;
    }
  }
</style>
