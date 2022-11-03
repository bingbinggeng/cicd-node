/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 13:42:19
 * @LastEditTime: 2022-11-03 10:49:55
 * @FilePath: \cicd-node\src\routes\articleConfig.js
 */
import * as controller from '../controller/articleConfig'

export function initArticleRoute (router) {
  // 文章查询
  router.post('/getArticleById', controller.getArticleById)
  // 配置查询
  router.get('/getList', controller.getConfigList)
  // 配置保存
  router.post('/article/save', controller.save)
  // 配置更新
  router.post('/article/update', controller.update)
  // 删除配置
  router.post('/article/delete', controller.del)
}