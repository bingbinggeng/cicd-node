/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-02 08:44:33
 * @FilePath: \cicd-node\src\mongoose\index.js
 */
import mongoose from 'mongoose'
import config from '../config'

const db = mongoose.connection
// console.log(config, 'config', db)

export const connect = function () {
  mongoose.connect(config.db.uri)
  db.on('error', console.error.bind(console, 'mongodb connect error'))
  db.once('open', console.log.bind(console, 'mongodb connect success'))
}