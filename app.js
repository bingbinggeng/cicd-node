/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-04 08:17:52
 * @FilePath: \cicd-node\src\index.js
 */
import Koa from 'koa'
import Router from '@koa/router'
import { initGlobalRoute } from './src/routes'
import { handleResponse } from './src/middleware'
import * as db from './src/mongoose'
import KoaBody from 'koa-body'
import createWebSocket from './src/websocket/app'

createWebSocket()

const app = new Koa();
const router = new Router()

db.connect()

app.use(KoaBody({
  multipart: true
}));

app.use(handleResponse())

initGlobalRoute(router)
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3200);