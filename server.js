import express from 'express'
import helmet from 'helmet'
import next from 'next'
import { join } from 'path'
import cookieParser from 'cookie-parser'
// import renderAndCache from './src/utils/cache'
import routes from './src/routers'

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  dir: `${__dirname}/src`,
  xPoweredBy: false
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server
      .disable('x-powered-by')
      .set('X-Powered-By', 'Witech')
      .use(helmet())
      .use(cookieParser())
      .use((req, res, next) => {
        res.removeHeader('x-powered-by')
        next()
      })

    routes(server, app)

    server
      .get('*', (req, res) => {
        if (req.url.includes('/sw')) {
          const filePath = join(__dirname, 'static', 'workbox', 'sw.js')
          app.serveStatic(req, res, filePath)
        } else if (req.url.startsWith('static/workbox/')) {
          app.serveStatic(req, res, join(__dirname, req.url))
        } else {
          handle(req, res, req.url)
        }
      })
      .listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
  })
  .catch(error => console.log('Error on Server render: ', error))
