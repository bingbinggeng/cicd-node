/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 12:57:36
 * @LastEditTime: 2022-11-02 13:47:03
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
  link: Array,
  review: Array,
  createTime: Date,
  createBy: String,
  updataTime: Date,
  updataBy: String,
})

export default mongoose.model('article', articleConfig)
