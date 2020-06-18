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
	next()
}


exports.signup = async (req,res,next)=>{
	
	res.status(200).render('pages/signup')
	next()
}

exports.membership = async (req,res,next)=>{
	
	res.status(200).render('pages/membership')
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