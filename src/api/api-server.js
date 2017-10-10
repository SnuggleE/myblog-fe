import * as api_config from './api-config'

import axios from 'axios'

const get_articles=function () {
  return axios.request({
    url:api_config.aticles(),
    timeout:api_config.TIME_OUT,
  })
}
const get_article_detail=function (detailId) {
  return axios.request({
    url:api_config.article_detail(detailId),
    timeout:api_config.TIME_OUT,
  })
}
const add_aticle=function (article) {
  return axios.request({
    url:api_config.aticles(),
    data:article,
    method:'POST',
    timeout:api_config.TIME_OUT
  })
}

export default {get_articles,get_article_detail,add_aticle}