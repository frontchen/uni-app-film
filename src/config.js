// 发布版本
const version = '1.0.0'
// 发布日期
const bundleVersion = '20190426'

// net接口虚拟路径
const netPrefix = 'erpapi/api'
// 白名单【非网关】
const whitelist = [
  // { name: 'commonUpload', path: 'fileUpload/upload' }
]

// 服务接口地址
const services = {
  commonBase: {
    url: 'http://api.1156zy.chenzhen.work',
    port: 80
  }
}

export default {
  bundleVersion: bundleVersion,
  version: version,
  apiUrl: 'http://api.1156zy.chenzhen.work',
  apiBaseUrl: '',
  apiConfig: services,
  netPrefix,
  whitelist
}
