import express from 'express'
import productController from './controllers/product.controller'
import restaurantController from './controllers/restaurant.controller'
const routerAdmin = express.Router()

/* Restaurant */
routerAdmin.get('/', restaurantController.goHome)
routerAdmin
	.get('/login', restaurantController.getLogin)
	.post('/login', restaurantController.processLogin)
routerAdmin
	.get('/signup', restaurantController.getSignup)
	.post('/signup', restaurantController.processSignup)

routerAdmin.get('/check-me', restaurantController.checkAuthSession)
routerAdmin.get('/logout', restaurantController.logout)

/* Product */
routerAdmin.get(
	'/product/all',
	restaurantController.verifyRestaurant,
	productController.getAllProducts,
)
routerAdmin.post('/product/create', productController.createNewProduct)
routerAdmin.post('/product/:id', productController.updateChosenProduct)

/* User */

export default routerAdmin
