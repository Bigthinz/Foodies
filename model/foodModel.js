const mongoose = require('mongoose')


const foodSchema = new mongoose.Schema({
	food:{
		type:String,
		required:[true, 'Restaurant must have a food name'],
		trim: true,
		maxLength:[20, 'Food name must have less or equal than 20'],
		minLength:[2, 'Food name must have more or equal than 2']
	},
	restaurant:{
		type:String,
		required:[true, 'Restaurant must have a name'],
		trim:true
	},
	price:{
		type:Number,
		required:[true, 'Food must have a price']
	},
	priceDiscount:{
		type:Number
	},
	rating:{
		type:Number,
		default:3.5,
		min:[1, 'The rating value must be above 1.0'],
		max:[5,'The rating value must be below 5.0']
	},
	comments:{
		type:String,
		trim:true
	},
	delivery:{
		type:String,
		trim:true,
		default:'Free'
	},
	deliveryTime:{
		type:Number,
		default:30
	},
	createdAt:{
		type:Date,
		default:Date.now()

	},
	images:[String],
	imageCover:{
		type:String,
		required:[true, 'Restarant Food must have an image cover']
	},
	icon:[String],
	discription:{
		type:String,
		trim:true
	}


})


foodSchema.pre('save', async function(next){
	this.images = '/' + this.images 
	this.imageCover = '/' + this.imageCover
	this.icon = '/' + this.icon
	

})


const Meals = mongoose.model('Meals',foodSchema)

module.exports = Meals
