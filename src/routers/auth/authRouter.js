import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/auth/login', (req, res) => renderAndCache(app, req, res, '/auth'))
    .get('/auth/register', (req, res) => renderAndCache(app, req, res, '/register'))
}

export default routes
