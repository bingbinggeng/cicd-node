/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-02 13:45:23
 * @FilePath: \cicd-node\src\routes\index.js
 */
import { initTestRoute } from './test'
import { initConfigRoute } from './jobConfig'
import { initBuildRoute } from './build'
import { initArticleRoute } from './articleConfig'

export function initGlobalRoute (router) {
  initTestRoute(router)
  initConfigRoute(router)
  initBuildRoute(router)
  initArticleRoute(router)
}
