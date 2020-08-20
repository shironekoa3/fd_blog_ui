<template>
  <section>
    <div class="container">
      <my-article-detail-box
        class="my-article-detail-box"

      />
<!--      :title="title"-->
<!--      :date="date"-->
<!--      :category="category"-->
<!--      :content="content"-->
<!--      :tags="tags"-->
    </div>
  </section>
</template>

<script>
  import MyArticleDetailBox from "../components/MyArticleDetailBox";

  export default {
    props: ['id'],
    data() {
      return {
        title: "",
        date: "",
        category: "",
        content: "",
        tags: []
      }
    },
    mounted() {
      console.log(this.id);
    },
    components: {
      "my-article-detail-box": MyArticleDetailBox
    }
  }
</script>

<style scoped>
  .my-article-detail-box {
    padding-top: 20px;
  }
</style>
