const express = require('express')
const {overView, showAll, login, signup, membership, dashboard} = require('./../controllers/viewsController')
// const {overView, showAll} = require('./../controllers/viewsController')



const router = express.Router()



router.get('/', overView)
router.get('/all', showAll, )
router.get('/membership', membership)
router.get('/dashboard',dashboard)
router.get('/all/login', login)
router.get('/all/signup', signup)

module.exports = router
		