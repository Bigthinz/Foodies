const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
	food:{
		type:String,
		required:[true, 'Restaurant must have a food name'],
		trim: true,
		maxLength:[20, 'Food name must have less or equal than 20'],
		minLength:[2, 'Food name must have more or equal than 2']
	},
	
	price:{
		type:Number,
		required:[true, 'Food must have a price']
	},
	priceDiscount:{
		type:Number
	},
	quantity:{
		type:Number
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
	images:[String]
	
	

})


/*foodSchema.pre('save', async function(next){
	this.images = '/' + this.images 
	this.imageCover = '/' + this.imageCover
	this.icon = '/' + this.icon 
	

})*/


const Cart = mongoose.model('Cart',cartSchema)

module.exports = Cart
