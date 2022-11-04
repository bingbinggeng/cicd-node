/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-03 10:51:02
 * @FilePath: \cicd-node\src\middleware\handleResponse.js
 */
import { RESPONSE_CODE } from '../constant'

export function handleResponse () {
  return async function (ctx, next) {
    console.log(ctx, '=====')
    await next()
    const { code, data, msg } = ctx.state.apiResponse
    ctx.body = getResult(code, data, msg)
  }
}

function getResult (code, data, msg) {
  const result = {
    code,
    data: null,
    msg: null
  }
  if (code === RESPONSE_CODE.SUC) {
    result.data = data
  }

  if (code === RESPONSE_CODE.ERR) {
    result.msg = msg
  }

  return result
}