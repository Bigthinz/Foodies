const express = require('express')
const {login,signup,getAllUser} = require('./../controllers/userController')



const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.route('/')
	  .get(getAllUser)

	  
	  
	  






module.exports = router