const express = require('express')
const {overView, showAll, login, signup, membership, dashboard, shoppingCart} = require('./../controllers/viewsController')
const {protect, isLoggedIn} = require('./../controllers/authController')
// const {overView, showAll} = require('./../controllers/viewsController')



const router = express.Router()

router.use(isLoggedIn)

router.get('/', overView)
router.get('/all', showAll )
router.get('/membership', membership)
router.get('/dashboard',dashboard)
router.get('/all/login', login)
router.get('/all/signup', signup)
router.get('/all/cart', shoppingCart)

module.exports = router
		