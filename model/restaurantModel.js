const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const resSchema = new mongoose.Schema({
	restaurant:{
		type:String,
		required:[true,'A restaurant must have a name'],
		trim:true,
		unique:true

	},
	city:{
		type:String,
		required:[true,'A restaurant must have a location'],
		trim:true
	},
	status:{
		type:String,
		required:[true, 'A restaurant must have a manger or an owner']		
	},
	email:{
		type:String,
		required:[true, 'Provide restaurant email address'],
		unique:true,
		lowercase:true,
		validate: [validator.isEmail]
	},
	phone_number:{
		type:Number,
		required:[true, 'Provide your number']

	},
	restaurant_number:{
		type:Number,
		required:[true,'Provide restaurant number']
	},
	active:{
		type:String,
		required:[true, 'Are you Opened Or yet to Open soon']

	},
	website:{
		type:String,
		trim:true,
		unique:true,
		lowercase:true
	},
	work_days:{
		type:[String],
		lowercase:true
	},
	address:{
		type:String,
		trim:true,
		required:[true,'A restuarant must have an address']
	},
	services:[String],
	alcohol:String,
	seating:String,
	payment:{
		type:String,
		required:[true,'Provide payment option']
	},
	images:[String],
	imageCover:{
		type:String
		// required:[true, 'A tour must have an imageCover']
	},
	createdAt:{
		type:Date,
		default: Date.now(),
		select:false
	},
	icon:[String],
	discription:{
		type:String,
		trim:true
	},
	password:{
		type:String,
		required:[true,'Please provide a password'],
		minlength:8,
		select:false
	},
	confirm_password:{
		type:String,
		required:[true,'Please provide a valid password'],
		validate:{
			//THIS ONLY WORKS ON CREATING AND SAVING
			validator: function(el){
				return el === this.password
			},
			message:'Password are not the same'
		}
	},
	passwordChangedAt: Date


})


resSchema.pre('save', async function(next){
	if(!this.isModified('password')) return next()

	this.password =  await bcrypt.hash(this.password,12)
	this.confirm_password = undefined	
	next()
})


const Resto = mongoose.model('Restaurant',resSchema)

module.exports = Resto