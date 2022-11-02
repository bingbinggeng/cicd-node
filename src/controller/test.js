/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-02 09:35:31
 * @FilePath: \cicd-node\src\controller\test.js
 */
import { RESPONSE_CODE } from '../constant'

export function get (ctx, next) {
  ctx.state.apiResponse = {
    code: RESPONSE_CODE.SUC,
    data: { name: '前端历程-测试-GET' }
  }
  next()
}

export function post (ctx, next) {
  ctx.body = {
    code: 0,
    data: { name: '前端历程-测试-POST' }
  }
  next()
}

