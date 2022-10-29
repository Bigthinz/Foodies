const express = require('express')
const {getAllMeals , getMeal, createMeal} = require('./../controllers/foodController')
const {protect} = require('./../controllers/authController')
const Cart = require('./../controllers/cart')




const router = express.Router()

router.route('/')
	  .get(protect,getAllMeals)
	  .post(createMeal)
	  


router.route('/:id')
	  .get(getMeal)


router.route('/add-to-cart/:id')
	  .post((req,res,next)=>{
	let productId = req.params.id
	let cart = new Cart(req.session.cart ? req.session.cart : {items: {}})

	Product.findById(productId, function(err, product){
		if(err){
			return res.status(301).json({
				message:"error on this file"
			})
		}

		cart.add(product, product.id)
		req.session.cart = cart
		console.log(req.session.cart)
	})
})


module.exports = router  