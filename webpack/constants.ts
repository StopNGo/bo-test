import path from 'path'

const IS_DEV: boolean = String(process.env.NODE_ENV).trim() === 'development'

const IS_SWC: boolean = true
const IS_LAZY_COMPILATION = false
const DEV_SERVER_PORT: number = 8080

const SRC_DIR: string = path.join(__dirname, '../front-end/src')
const DIST_DIR: string = path.join(__dirname, '../back-end/wwwroot')

const SERVER_BUNDLE_NAME: string = 'server'

const ALIAS: Record<string, string> = {
  api: `${SRC_DIR}/api`,
  assets: `${SRC_DIR}/assets`,
  components: `${SRC_DIR}/components`,
  widgets: `${SRC_DIR}/widgets`,
  images: `${SRC_DIR}/assets/images`,
  pages: `${SRC_DIR}/pages`,
  router: `${SRC_DIR}/router`,
  src: `${SRC_DIR}`,
  style: `${SRC_DIR}/style`,
  _webpack: path.join(__dirname, '../webpack')
}

export {
  ALIAS,
  DEV_SERVER_PORT,
  DIST_DIR,
  IS_DEV,
  IS_SWC,
  IS_LAZY_COMPILATION,
  SERVER_BUNDLE_NAME,
  SRC_DIR
}
