/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 12:57:36
 * @LastEditTime: 2022-11-03 10:04:15
 * @FilePath: \cicd-node\src\model\articleConfig.js
 */
import mongoose from 'mongoose'

const articleConfig = new mongoose.Schema({
  title: {
    type: String
  },
  categoryId: {
    type: String
  },
  author: {
    type: String
  },
  content: {
    type: String
  },
  createTime: Date,
  createBy: String,
  updataTime: Date,
  updataBy: String,
  link: Array,
  review: Array,
})

export default mongoose.model('article', articleConfig)
