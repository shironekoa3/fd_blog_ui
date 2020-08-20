<template>
  <div class="image-card">
    <div class="avatar-box" :style="{backgroundImage: `url(${avatar})`}"></div>
    <div class="text-widget" v-html="widget"></div>
    <hr/>
    <div class="info-box">
      <div>
        <div class="label">文章</div>
        <div class="value" v-text="article_count"></div>
      </div>
      <div>
        <div class="label">分类</div>
        <div class="value" v-text="category_count"></div>
      </div>
      <div>
        <div class="label">评论</div>
        <div class="value" v-text="comment_count"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyImageCard",
    props: {
      avatar: {
        type: String,
        default: "https://cdn.jsdelivr.net/gh/shironekoa3/cdn@master/images/gravatar.jpg"
      },
      widget: {
        type: String,
        default: "活到老，学到老"
      },
      article_count: {
        type: Number,
        default: 0
      },
      category_count: {
        type: Number,
        default: 0
      },
      comment_count: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .image-card {
    width: 100%;
    padding: 20px;
    text-align: center;
  }

  .avatar-box {
    width: 80px;
    height: 80px;
    margin: 0 auto 10px;
    background-position: center;
    background-size: 100%;
    border-radius: 50%;

  }
  .text-widget {
    font-weight: lighter;
    font-size: 18px;
  }

  hr {
    margin: 20px auto;
    height: 1px;
    border: none;
    border-top: 1px rgba(0, 0, 0, .1) solid;
  }

  .info-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  .label {
    font-size: 20px;
    font-weight: lighter;
    user-select: none;
  }
  .value {
    margin-top: 10px;
    font-size: 24px;
    font-weight: lighter;
    user-select: none;
  }

</style>
