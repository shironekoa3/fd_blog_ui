import * as api from "../api/api"

let articles = [];

export const getArticles = () => {
  if (articles.length <= 0) {
    api.listArticles().then(res => {
      articles = res.data;
    });
  }
  return articles;
};

export const getArticleById = id => {
  if (articles.length <= 0) {
    getArticles();
  }
  let result = {};
  articles.forEach(article => {
    if (article["articleId"] && article["articleId"] === Number(id)) {
      result = article;
    }
  });
  return result;
};
