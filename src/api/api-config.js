export const HOST='http://localhost/';

export const TIME_OUT=10000;

export const aticles=function () {
  return HOST+'articles'
}
export const article_detail=function (articleId) {
  return HOST+'article/'+articleId
}