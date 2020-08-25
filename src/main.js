// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/utils/highlight.js';
import './assets/utils/fontawesome.js';
import "./style/common.css"
import "./style/hljs.css"
import * as api from "./api/api"
import {getArticles, getArticleById} from "@/assets/articles";
import {scrollAnimation} from "./assets/extra"
import 'progress-catalog/src/progress-catalog.css'

Vue.prototype.scrollAnimation = scrollAnimation;
Vue.prototype.getArticles = getArticles;
Vue.prototype.getArticleById = getArticleById;
Vue.prototype.api = api;
Vue.config.productionTip = false;
getArticles();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
