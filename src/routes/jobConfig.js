/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-02 09:15:38
 * @FilePath: \cicd-node\src\routes\jobConfig.js
 */
import * as controller from '../controller/jobConfig'

export function initConfigRoute (router) {
  // 配置查询
  router.get('/api/job', controller.getConfigList)
  // 配置保存
  router.post('/api/job/save', controller.save)
  // 配置更新
  router.post('/api/job/update', controller.update)
  // 删除配置
  router.post('/api/job/delete', controller.del)
}