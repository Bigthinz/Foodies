const bcrypt = require('bcryptjs')
const Meals = require('./../model/foodModel.js')
const catchAsync = require('./../utils/catchAsync')


exports.getAllMeals = async (req,res,next)=>{
	const meals = await Meals.find()

	res.status(200).json({
		status:'success',
		length:meals.length,
		data:{
			meals
		}
	})

	next()
}

exports.getMeal = catchAsync(async(req,res, next)=>{
	const meal = await Meals.findById( req.params.id)

	res.status(200).json({
		status:'success',
		data: {
			meal
		}
	})

	
})


exports.createMeal = catchAsync(async(req,res,next)=>{
	
	

	const newMeal = await Meals.create(req.body)

	res.status(200).json({
		status:'success',
		data:{
			meals:newMeal
		}
	})
	
})