/*
 * @Author: bingbing.geng
 * @Date: 2022-11-04 08:13:36
 * @LastEditTime: 2022-11-04 10:38:46
 * @FilePath: \cicd-node\src\websocket\app.js
 */

import { WebSocketServer, WebSocket } from 'ws'
 
// 连接列表
const clients = []
 
export default function createWebSocket() {
  const wss = new WebSocketServer({
    port: 3002
  })
 
  wss.on('connection', (ws) => {
    // 接收信息
    ws.on('message', (message) => {
      const msg = JSON.parse(message.toString('utf-8'))
      console.log('连接成功', msg)
      if (msg.uid) {
        // 首次连接
        if (!clients.includes(msg.uid)) {
          clients.push({ ws, uid: msg.uid })
        }
        if (msg.reciveId) {
          const index = clients.findIndex((item) => item.uid === msg.reciveId)
          if (index === -1) {
            ws.send(JSON.stringify({ content: '用户还未上线', sendId: 'socket'  }))
          } else {
            if (msg.content) {
              clients[index].ws.send(
                JSON.stringify({ content: msg.content, sendId: msg.uid })
              )
            }
          }
        }
      }
    })
 
    // 关闭连接
    ws.on('close', (ws) => {
      console.log('close')
    })
  })
}
