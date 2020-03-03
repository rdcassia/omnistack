const { Router } = require('express')
const DevController = require('./controllers/devController')
const SearchController = require('./controllers/searchController')


const routes = Router();

routes.get('/devs', DevController.index)
routes.get('/search', SearchController.index)
routes.post('/devs', DevController.store)

module.exports = routes