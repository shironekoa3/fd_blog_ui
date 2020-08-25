<template>
  <div>
    <div class="article-nav" :style="{'margin-top': (scrollTop > 320?scrollTop-320:0) + 'px'}">
      <div class="catelog-title">
        <h4>文章目录</h4>
      </div>
      <div id="toc"></div>
    </div>
  </div>
</template>

<script>
  import Catalog from 'progress-catalog'

  export default {
    name: "MyArticleNav",
    data() {
      return {
        scrollTop: 0,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true);
      setTimeout(() => {
        new Catalog({
          contentEl: 'my-article-detail-box',
          catalogEl: "toc",
          cool: false,
        })
      }, 100)
    },
    methods: {
      handleScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    },
    destroyed() {
      // 离开该页面需要移除这个监听的事件，不然会报错
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style scoped>
  .article-nav {
    padding: 35px 0;
    background-color: #fff;
    border-radius: 5px;
  }
  .catelog-title {
    width: 100px;
    margin: 0 auto 10px;
    border-bottom: 1px solid #15BAFE ;
  }
  .catelog-title h4 {
    color: #15BAFE;
    text-align: center;
    font-size: 18px;
    font-weight: lighter;
  }
  #toc {
    padding-right: 15px;
  }

  /deep/ .cl-link {
    color: #000 !important;
    font-size: 14px;
    font-weight: lighter;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.8;
  }
  /deep/ .cl-link:hover {
    color: #15BAFE !important;
  }


</style>
