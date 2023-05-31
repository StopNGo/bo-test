import jsonServer from 'json-server'
import { data } from '../mock-tool/db'

const server = jsonServer.create()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})
