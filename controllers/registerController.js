const catchAsync = require('./../utils/catchAsync')
const Resto = require('./../model/restaurantModel')



exports.getAllRestaurants = async (req,res,next)=>{
	const restaurant = await Resto.find()
	res.status(200).json({
		success:'success',
		length:restaurant.length,
		data:{
			restaurant
		}
	})
}



exports.restoSign = catchAsync(async (req,res,next)=>{
	const restaurant = await Resto.create(req.body)
	
	res.status(200).json({
		status:'success',
		data:{
			restaurant
		}
	})
	next()
})