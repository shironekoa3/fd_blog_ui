<template>
  <div class="category-card">
    <h3>※ 文章分类</h3>
    <hr/>
    <router-link class="category-link" :to="{path: '/', query: {id: 1}}" v-for="(item,i) in categories" :key="i">
      <my-icon class="my-icon" icon="icon-category" v-text="item"></my-icon>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "MyCategoryCard",
    props: {
      categories: {
        type: Array,
        default: () => ["日常", "教程"]
      }
    }
  }
</script>

<style scoped>
  .category-card {
    border: 1px solid red;
    padding: 20px;
  }

  h3 {
    font-size: 20px;
    font-weight: 100;

  }

  hr {
    margin: 10px 0;
  }

  .category-link {
    display: block;
    margin-top: 10px;
    color: #000;
  }
  .category-link:hover {
    color: #2d8cf0;
  }

  .my-icon {
    font-size: 20px;
    font-weight: lighter;
  }
</style>
