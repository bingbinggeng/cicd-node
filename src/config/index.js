/*
 * @Author: bingbing.geng
 * @Date: 2022-11-02 08:17:51
 * @LastEditTime: 2022-11-02 08:42:36
 * @FilePath: \cicd-node\src\config\index.js
 */
import development from './development.env'
import production from './production.env'

const envConfigs = {
  development,
  production
}

const config = (function (env) {
  return envConfigs[env]
})(process.env.NODE_ENV || 'development')

export default development