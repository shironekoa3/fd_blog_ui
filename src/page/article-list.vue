<template>
  <section>
    <div class="container">
      <div class="article-boxes">
        <my-article-box
          class="my-article-box"
          :link="'/article/' + (i+1)"
          title="Java （计算机编程语言）"
          :content="content"
          date="2020-02-02"
          :click_count="192"
          :tags="['日常', '教程']"
          v-for="(item,i) in 10"
          :key="i"
        ></my-article-box>
      </div>
      <div class="info-box">
        <!--        <my-image-card></my-image-card>-->
        <my-category-card></my-category-card>
      </div>
    </div>
  </section>
</template>

<script>
  import MyArticleBox from "../components/MyArticleBox";
  import MyImageCard from "../components/MyImageCard";
  import MyCategoryCard from "../components/MyCategoryCard";

  export default {
    name: "article-list",
    data() {
      return {
        content: "Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程 [1]  。"
      }
    },
    mounted() {
    },
    watch: {
      $route(){
        console.log(this.$route.query["id"]);
      }
    },
    components: {
      "my-article-box": MyArticleBox,
      "my-image-card": MyImageCard,
      "my-category-card": MyCategoryCard,
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .article-boxes {
    flex: 1;
    overflow: hidden;
  }

  .my-article-box {
    margin-top: 10px;
  }

  .my-article-box:nth-child(1) {
    margin-top: 0;
  }

  .info-box {
    width: 260px;
    margin-left: 20px;
  }

  @media screen and (max-width: 800px) {
    .info-box {
      display: none;
    }
  }
</style>
