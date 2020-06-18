const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AppError = require('./../utils/appError')
const User = require('./../model/userModel')
const Meals = require('./../model/foodModel')
const catchAsync = require('./../utils/catchAsync')

const signToken = (id)=>{
	return jwt.sign({id}, process.env.JWT_SECRET)
}

exports.getAllUser = catchAsync(async (req,res,next) =>{

	const user = await User.find()

	res.status(200).json({
		status:'sucess',
		data:{
			user
		}
	})
})  



exports.login = catchAsync(async (req,res,next)=>{
	console.log(req.body)
	const {student, password} = req.body
	
	const meal = await Meals.find()

	if(!student || ! password){
		return next( new AppError('please provide id and password',400))	
	}

	const user = await User.findOne({student}).select('+password')

	

	if(!user ||  !( await user.correctPassword(password, user.password))){
		return next(new AppError("Invalid id or password",401))
	}

	const token = signToken(user.id)

	   res.status(200).json({
	   		status:'sucess',
	   		token,
	   		data:{
	   			user
	   		}
	   })

	   

	})



exports.signup = catchAsync(async (req,res,next)=>{
	console.log(req.body)
	const {student_id, email, password, confirmPassword} = req.body

	const user = await User.create(req.body)
	const token = signToken(user.id)

	res.status(200).json({
		status:'sucess',
		token,
		data:{
			user
		}
	})

	
})

