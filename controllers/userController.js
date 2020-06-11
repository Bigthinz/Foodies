const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('./../model/userModel')
const Meals = require('./../model/foodModel')



exports.getAllUser = async (req,res,next) =>{

	const user = await User.find()


	res.status(200).json({
		status:'sucess',
		data:{
			user
		}
	})
}  



exports.login = async (req,res,next)=>{
	console.log(req.body)
	const {student, password} = req.body
	
	const meal = await Meals.find()

	if(!student || ! password){
		console.log('please provide id and password')
		return res.status(401).json({
	   		status:'error',
	   		messsage:"please provide id and password"
	   })

	}

	const user = await User.findOne({student}).select('+password')

	

	if(!user ||  !( await user.correctPassword(password, user.password))){
		console.log('invalid password or student id')
		return  res.status(401).json({
	   		status:'error',
	   		messsage:"Invalid id or password"
	   })
	}

	   res.status(200).json({
	   		status:'sucess',
	   		data:{
	   			user
	   		}
	   })

	   next()

	}



exports.signup = async (req,res,next)=>{
	console.log(req.body)
	const {student_id, email, password, confirmPassword} = req.body

	const user = await User.create(req.body)

	res.status(200).json({
		status:'sucess',
		data:{
			user
		}
	})

	next()
}

