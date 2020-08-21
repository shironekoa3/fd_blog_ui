import http from './http'

// -------------------------首页------------------------------------------
export const getWebsiteInfo = () => {
  return http.get("/api/getWebsiteInfo");
};

// -------------------------用户------------------------------------------
export const getUserInfo = () => {
  return http.get("/api/getUserInfo");
};

// -------------------------文章------------------------------------------
// 获取文章列表(GET)
export const listArticles = () => {
  return http.get("/api/article/list");
};

// -------------------------评论------------------------------------------
// 获取评论列表(GET)
export const listComments = () => {
  return http.get("/api/listComments");
};
// 删除评论(GET)
export const deleteComment = (id) => {
  return http.get(`/api/deleteComment?id=${id}`);
};

