<template>
  <article class="article-detail-box">
    <div class="article-top-date">
      <div class="month" v-text="month"></div>
      <div class="day" v-text="day"></div>
    </div>
    <header>
      <h1 class="article-title" v-text="title"></h1>
      <div class="article-meta">
        <div class="article-date">
          <font-awesome-icon icon="calendar-alt"/>
          <span>发表于</span>
          <span v-text="date"></span>
        </div>
        <div class="article-category">
          <font-awesome-icon icon="archive"/>
          <span>分类为</span>
          <span v-text="category"></span>
        </div>
        <div class="article-word-count">
          <font-awesome-icon icon="file-word"/>
          <span>字数统计</span>
          <span v-text="wordCount"></span>
        </div>
        <div class="article-visitors-count">
          <font-awesome-icon icon="eye"/>
          <span>阅读量</span>
          <span v-text="click_count"></span>
        </div>
      </div>
    </header>
    <div class="article-body">
      <div class="article-img">
        <img :src="img_url" alt="这里丢失了一张图片" v-if="img_url">
      </div>
      <p class="article-content" v-html="htmlContent" v-highlight></p>
    </div>
  </article>
</template>

<script>

  import marked from "marked"

  // let rendererMD = new marked.Renderer();
  marked.setOptions({
    "baseUrl": null,
    "breaks": false,
    "gfm": true,
    "headerIds": true,
    "headerPrefix": "",
    "highlight": null,
    "langPrefix": "language-",
    "mangle": true,
    "pedantic": false,
    "sanitize": false,
    "sanitizer": null,
    "silent": false,
    "smartLists": false,
    "smartypants": false,
    "tokenizer": null,
    "walkTokens": null,
    "xhtml": false
  });

  export default {
    name: "MyArticleDetailBox",
    data() {
      return {
        id: 1,
        title: "",
        img_url: "",
        date: "",
        month: "",
        day: "",
        category: "",
        content: "",
        click_count: 0,
      }
    },
    computed: {
      wordCount() {
        return this.content.length;
      },
      htmlContent() {
        // let end = this.content.indexOf("<!-- more -->");
        return marked(this.content, {sanitize: false});
      }
    },
    watch: {
      article(){
        let tempArticle = this.article || {};
        let tempDate = new Date(tempArticle["articleDate"] || new Date());
        this.id = tempArticle["articleId"] || 1;
        this.title = tempArticle["articleTitle"] || "UnTitle";
        this.img_url = tempArticle["articleImage"] || "";
        this.date = tempDate.Format("yyyy-MM-dd");
        this.month = tempDate.Format("MM");
        this.day = tempDate.Format("dd");
        this.category = tempArticle["categoryName"] || "未分类";
        this.content = tempArticle["content"] || "";
        this.click_count = tempArticle["clickCount"] || 0;
      }
    },
    mounted() {

    },
    props: {
      article: {
        type: Object,
        default: () => {
        }
      },
      test: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .article-detail-box {
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 40px;
    font-size: 14px;
    color: #555555;
    padding: 35px;
    position: relative;
    max-width: 1100px;
  }

  .article-top-date {
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    border-width: 50px;
    border-color: #97dffd transparent transparent #97dffd;
    border-style: solid;
    border-top-left-radius: 5px;
    color: #ffffff;
    text-align: center;
    line-height: 1.1;
  }

  .article-top-date .month {
    position: absolute;
    top: -38px;
    left: -42px;
    transform: rotate(-45deg);
    font-size: 16px;
  }

  .article-top-date .day {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    top: -28px;
    left: -32px;
    transform: rotate(-45deg);
  }

  .article-title {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }

  .article-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: 20px 0;
  }

  .article-meta > div {
    margin: 0 10px;
  }

  .article-date {
    color: #00a7e0;
  }

  .article-category {
    /*color: #ff5d9e;*/
    color: #fc9f4d;
  }

  .article-word-count {
    color: #000;
  }

  .article-visitors-count {
    color: #ff3f1a;
  }

  .article-body {
    line-height: 2;
    font-size: 16px;
    font-weight: lighter;
  }

  .article-img {
    width: 100%;
    text-align: center;
  }

  .article-body img {
    width: 100%;
    border-radius: 5px;
    /*max-height: 500px;*/
  }

  .article-content {
    width: 100%;
    overflow: hidden;
  }

  @media screen and (max-width: 650px) {
    .article-category {
      display: none;
    }
  }
</style>
