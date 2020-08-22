<template>
  <section>
    <div class="container">
      <my-article-detail-box
        class="my-article-detail-box"
        :article="article"
      />
    </div>
  </section>
</template>

<script>
  import MyArticleDetailBox from "../components/MyArticleDetailBox";

  export default {
    props: ['id'],
    data() {
      return {
        article: {}
      }
    },
    mounted() {
      this.article = this.getArticleById(this.id);
      setTimeout(()=>{
        this.scrollAnimation(320, 20);
      },300);
    },
    components: {
      "my-article-detail-box": MyArticleDetailBox
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .my-article-detail-box {
    flex: 1;
    /*overflow: hidden;*/
  }

  @media screen and (max-width: 800px) {
    .my-article-detail-box {
      width: 100%;
    }
  }
</style>
