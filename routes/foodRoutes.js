const express = require('express')
const {getAllMeals , getMeal, createMeal} = require('./../controllers/foodController')
const {protect} = require('./../controllers/authController')




const router = express.Router()

router.route('/')
	  .get(protect,getAllMeals)
	  .post(createMeal)
	  


router.route('/:id')
	  .get(getMeal)



module.exports = router