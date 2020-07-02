const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AppError = require('./../utils/appError')
const User = require('./../model/userModel')
const Meals = require('./../model/foodModel')
const catchAsync = require('./../utils/catchAsync')

const signToken = (id)=>{
	return jwt.sign({id}, process.env.JWT_SECRET )
}


const createSendToken = (user, statusCode, res)=>{
	const token = signToken(user._id)

	const cookieOptions = {
		expires: new Date(Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000 ),
		httpOnly:true 
	}

	if(process.env.NODE_ENV === 'production') cookieOptions.secure = true

	user.password = undefined	

	res.cookie('jwt',token, cookieOptions )

	res.status(statusCode).json({
		status:'success',
		token,
		data:{
			user
		}
	})
}




exports.getAllUser = catchAsync(async (req,res,next) =>{

	const user = await User.find()

	res.status(200).json({
		status:'success',
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

	createSendToken(user,200,res)

	   

	})



exports.signup = catchAsync(async (req,res,next)=>{
	console.log(req.body)
	const {student_id, email, password, confirmPassword} = req.body

	const user = await User.create(req.body)
	createSendToken(user,201,res)
	

	

	
})

