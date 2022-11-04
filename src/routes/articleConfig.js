/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 13:42:19
 * @LastEditTime: 2022-11-03 10:49:55
 * @FilePath: \cicd-node\src\routes\articleConfig.js
 */
import * as controller from '../controller/articleConfig'

export function initArticleRoute (router) {
  // 文章查询
  router.post('/api/getArticleById', controller.getArticleById)
  // 配置查询
  router.get('/api/getList', controller.getConfigList)
  // 配置保存
  router.post('/api/article/save', controller.save)
  // 配置更新
  router.post('/api/article/update', controller.update)
  // 删除配置
  router.post('/api/article/delete', controller.del)
}