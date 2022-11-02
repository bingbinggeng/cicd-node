/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-02 09:16:36
 * @FilePath: \cicd-node\src\routes\build.js
 */
import * as controller from '../controller/build'

export function initBuildRoute (router) {
  // 调用jenkins构建任务
  router.post('/build', controller.build)
}
