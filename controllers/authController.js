const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const catchAsync = require('./../utils/catchAsync')
const User = require('./../model/userModel')
const Meals = require('./../model/foodModel')
const Resto = require('./../model/restaurantModel')

const signToken = (id)=>{
	return jwt.sign({id}, process.env.JWT_SECRET)
}




exports.signup = catchAsync(async (req,res,next)=>{

	const user =  await User.create(req.body)
	const token = signToken(user.id)
	const meal = await Meals.find()


	res.status(200).render('pages/category',{
			meal,
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

	   res.render('pages/category',{
			meal,
			data:{
				user
			}
		})

	}

	// res.status(200).render('pages/login')
)




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