<template>
  <div class="article-box">
    <div>
      <router-link class="link" :to="link">
        <h3 v-text="title" style="display: inline;"></h3>
      </router-link>
      <div class="content">
        <div class="text" v-html="content"></div>
      </div>
    </div>
    <footer>
      <my-icon class="my-icon" icon="icon-calendar" v-text="date"></my-icon>
      <my-icon class="my-icon" icon="icon-read" v-text="click_count"></my-icon>
      <my-icon class="my-icon" icon="icon-tags" v-text="tags.join('、')"></my-icon>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "MyArticleBox",
    props: {
      link: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: "Hello World"
      },
      content: {
        type: String,
        default: ""
      },
      date: {
        type: String,
        default: "1970-01-01"
      },
      click_count: {
        type: Number,
        default: 0
      },
      tags: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>
  .article-box {
    /*background-color: #f00;*/
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding: 10px 0;
    max-height: 300px;
  }

  .link {
    color: #000;
  }

  .link:hover {
    color: #2d8cf0;
  }

  h3 {
    font-size: 26px;
    font-weight: 400;
  }

  .article-box .content {
    margin: 10px 0;
    max-height: 75px;
    overflow: hidden;
    font-weight: lighter;
  }

  .article-box .text {
    line-height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  footer {
    color: rgba(0, 0, 0, .6);
  }

  footer .my-icon {
    margin-left: 10px;
  }

  footer .my-icon:nth-child(1) {
    margin-left: 0;
  }

</style>
