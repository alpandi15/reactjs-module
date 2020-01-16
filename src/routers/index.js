import authRouter from './auth/authRouter'

const routes = (server, app) => {
  server.use(authRouter(app))
}

export default routes
