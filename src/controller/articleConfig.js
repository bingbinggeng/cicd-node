/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 13:41:12
 * @LastEditTime: 2022-11-03 10:51:45
 * @FilePath: \cicd-node\src\controller\articleConfig.js
 */
import * as services from '../services/articleConfig'
import { RESPONSE_CODE } from '../constant'

export async function getConfigList (ctx, next) {
  try {
    const { pageNo: page, pageSize, title } = ctx.request.query
    const pageData = await services.findJobPage(page, pageSize, { title })
    const total = await services.countJob({ title })

    ctx.state.apiResponse = {
      code: RESPONSE_CODE.SUC,
      data: {
        list: pageData,
        page,
        pageSize,
        total
      }
    }
  } catch (e) {
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.ERR,
      msg: '配置分页查询失败'
    }
  }
  next()
}

export async function getArticleById(ctx, next) {
  try {
    const requestBody = ctx.request.body
    
    const { id } = requestBody
    const data = await services.findJobById(id)
    
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.SUC,
      data: data
    }
  } catch (e) {
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.ERR,
      msg: '查询失败'
    }
  }
  next()
}

export async function save (ctx, next) {
  const requestBody = ctx.request.body

  try {
    await services.save(requestBody)

    ctx.state.apiResponse = {
      code: RESPONSE_CODE.SUC,
      data: null
    }
  } catch (e) {
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.ERR,
      msg: '配置数据保存失败'
    }
  }

  next()
}

export async function update (ctx, next) {
  const requestBody = ctx.request.body
  const { id } = requestBody
  try {
    await services.update(id, requestBody)
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.SUC,
      data: null
    }
  } catch (e) {
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.ERR,
      msg: '配置数据更新失败'
    }
  }
  next()
}

export async function del (ctx, next) {
  const { id }  = ctx.request.body

  try {
    await services.deleteById(id)
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.SUC,
      data: null
    }
  } catch (e) {
    ctx.state.apiResponse = {
      code: RESPONSE_CODE.ERR,
      msg: '配置删除失败'
    }
  }
}