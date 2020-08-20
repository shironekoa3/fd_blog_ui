<template>
  <div class="article-detail-box">
    <h1 v-text="title"></h1>
    <div class="tags">
      <my-icon class="my-icon" icon="icon-calendar" v-text="date"></my-icon>
      <my-icon class="my-icon" icon="icon-pinglun" v-text="comment_count"></my-icon>
      <my-icon class="my-icon" icon="icon-read" v-text="click_count"></my-icon>
      <my-icon class="my-icon" icon="icon-like" v-text="lick_count"></my-icon>
      <my-icon class="my-icon" icon="icon-category" v-text="category"></my-icon>
      <my-icon class="my-icon" icon="icon-tags" v-text="tags.join('、')"></my-icon>
    </div>
    <div class="content" v-html="newContent">

    </div>
  </div>
</template>

<script>

  import mkd from "marked";

  export default {
    name: "MyArticleDetailBox",
    mounted(){
      mkd.setOptions({
        renderer: new mkd.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });
    },
    computed: {
      newContent() {
        return mkd(this.content || '', {
          // sanitize: true
        });
      }
    },
    props: {
      title: {
        type: String,
        default: "网件WNDR4300路由器折腾日记"
      },
      date: {
        type: String,
        default: "2020-02-02"
      },
      comment_count: {
        type: Number,
        default: 192
      },
      click_count: {
        type: Number,
        default: 192
      },
      lick_count:{
        type: Number,
        default: 99999
      },
      category: {
        type: String,
        default: "代码"
      },tags: {
        type: Array,
        default: () => ["AAA", "BBB"]
      },
      content: {
        type: String,
        default: "# NULL"
      }
    }
  }
</script>

<style scoped>
  .article-detail-box {
    text-align: center;
  }
  h1 {
    text-align: center;
    font-weight: 400;
    font-size: 30px;
  }
  .tags {
    margin: 20px 0;
    color: rgba(0, 0, 0, .6);
  }

  .tags .my-icon {
    margin: 0 5px;
  }

  .content {
    text-align: left;
  }
</style>
