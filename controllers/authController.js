const {promisify} = require('util')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const catchAsync = require('./../utils/catchAsync')
const User = require('./../model/userModel')
const Meals = require('./../model/foodModel')
const Resto = require('./../model/restaurantModel')
const AppError = require('./../utils/appError')


const signToken = (id)=>{
	return jwt.sign({id}, process.env.JWT_SECRET ,{
		expiresIn:process.env.JWT_EXPIRES_IN
	})
}


const createSendToken = (user, statusCode, res)=>{
	const token = signToken(user._id)

	const cookieOptions = {
		expires: new Date(Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000 ),
		httpOnly:true 
	}

	if(process.env.NODE_ENV === 'production') cookieOptions.secure = true

	res.cookie('jwt',token, cookieOptions )

	res.status(statusCode).json({
		status:'success',
		token,
		data:{
			user
		}
	})
}




exports.signup = catchAsync(async (req,res,next)=>{

	const user =  await User.create(req.body)
	const token = signToken(user.id)
	const meal = await Meals.find()


	createSendToken(user,201,res)
	
	
})

exports.login = catchAsync(async (req,res,next)=>{
			
		console.log(req.body)
	const {student, password} = req.body
	
	const meal = await Meals.find()

	if(!student || ! password){
		console.log('please provide id and password')
		return res.status(401).render('pages/login', {
			messsage: "please provide id and password",
			
		})

	}

	const user = await User.findOne({student}).select('+password')

	

	if(!user ||  !( await user.correctPassword(password, user.password))){
		console.log('invalid password or student id')
		const message = " invalid password or student id"
		return  res.redirect('/all/login', {message}, 401)
	}

	  createSendToken(user,200,res)

	}

	// res.status(200).render('pages/login')
)


exports.protect = catchAsync(async(req,res,next)=>{
	let token

	if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
		token = req.headers.authorization.split(' ')[1]
	}

	if(!token){
		return next(new AppError('You are not logged in. Please login to get access',401))
	}

	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
	console.log(decoded)

	const currentUser = await User.findById(decoded.id)

	if(!currentUser){
		return next(new AppError('The user belonging to this token does not exit!..',401))
	}


	req.user = currentUser

	next()




})





exports.isLoggedIn = async(req,res,next)=>{
 
	if(req.cookies.jwt){
		try{
	const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
	console.log(decoded)

	const currentUser = await User.findById(decoded.id)

	if(!currentUser){
		return next()
	}


	res.locals.user = currentUser

	return next()

	}catch(err){
		return next()
	}
}
	next()

}


exports.restoSign = async (req,res,next)=>{


	try{
		console.log(req.body)
	const restaurant = await Resto.create(req.body)
	const meal = await Meals.find()

	res.render('pages/all', {
		meal,
		data:{
			restaurant
		}
	})  

	next()
	}catch(err){
		console.log(err)
	}
	
}



// exports.driveSign = (req,res,next)=>{
// 	console.log(req.body)
// }