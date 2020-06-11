// const mongoose = require('mongoose')
// const validator = require('validator')
// const bcrypt = require('bcryptjs')

// const driveSchema = new mongoose.Schema({
// 	name:{
// 		type:String,
// 		required:[true,'A restaurant must have a name'],
// 		trim:true,
// 		unique:true

// 	},
// 	city:{
// 		type:String,
// 		required:[true,'A restaurant must have a location'],
// 		trim:true
// 	},
// 	status:{
// 		type:String,
// 		required:[true, 'A restaurant must have a manger or an owner']		
// 	},
// 	email:{
// 		type:String,
// 		required:[true, 'Provide restaurant email address'],
// 		unique:true,
// 		lowercase:true,
// 		validate: [validator.isEmail]
// 	},
// 	phone_number:{
// 		type:Number,
// 		required:[true, 'Provide your number']

// 	},
// 	bike:{
// 		type:String,
// 		required:[true,'Provide restaurant number']
// 	},
// 	active:{
// 		type:String,
// 		required:[true, 'Are you Opened Or yet to Open soon']

// 	},
// 	website:{
// 		type:String,
// 		trim:true,
// 		unique:true,
// 		lowercase:true
// 	},
// 	work_days:{
// 		type:[String],
// 		lowercase:true
// 	},
// 	work_time:{
// 		type:String,
// 		required:[true,'How long can you work']
// 	},
	
// 	earning:{
// 		type:String,
// 		required:[true,'Provide payment option']
// 	},
// 	license:[String],
	
// 	createdAt:{
// 		type:Date,
// 		default: Date.now(),
// 		select:false
// 	},
	
// 	password:{
// 		type:String,
// 		required:[true,'Please provide a password'],
// 		minlength:8,
// 		select:false
// 	},
// 	confirm_password:{
// 		type:String,
// 		required:[true,'Please provide a valid password'],
// 		validate:{
// 			//THIS ONLY WORKS ON CREATING AND SAVING
// 			validator: function(el){
// 				return el === this.password
// 			},
// 			message:'Password are not the same'
// 		}
// 	},
// 	passwordChangedAt: Date,
// 	company:{
// 		type:String,
// 		required:[true, 'Which company']
// 	}


// })

// /*
// driveSchema.pre('save', async function(next){
// 	if(!this.isModified('password')) return next()

// 	this.password =  await bcrypt.hash(this.password,12)
// 	this.confirm_password = undefined	
// 	next()
// })
// */

// const Drive = mongoose.model('Drive',driveSchema)

// module.exports = Drive