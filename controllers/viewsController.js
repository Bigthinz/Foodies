 const Meals = require('./../model/foodModel.js')

exports.overView = async (req,res,next)=>{

	const meal = await Meals.find()

	res.status(200).render('pages/category', {
		title: 'all meals',
		meal
	})

}

exports.showAll = async(req,res,next)=>{
	const meal = await Meals.find()

	res.status(200).render('pages/all', {
		title: 'all meals categories',
		meal
	})
}

exports.login = async (req,res,next)=>{
	const message = ""
	res.status(200).render('pages/login',{message})
	
}


exports.signup = async (req,res,next)=>{
	
	res.status(200).render('pages/signup')
	
}

exports.membership = async (req,res,next)=>{
	
	res.status(200).render('pages/membership')
	next()
}


exports.shoppingCart = async (req,res,next)=>{
	
	res.status(200).render('pages/cart')
	next()
}


exports.dashboard = async (req,res,next)=>{
	const meal = await Meals.find()
	
	res.status(200).render('pages/dashboard',{
		title:"all meal",
		meal
	})
	next()
}