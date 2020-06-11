const express = require('express')
const {getAllMeals , getMeal, createMeal} = require('./../controllers/foodController')




const router = express.Router()

router.route('/')
	  .get(getAllMeals)
	  .post(createMeal)
	  


router.route('/:id')
	  .get(getMeal)



module.exports = router