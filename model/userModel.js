const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
	student:{
		type:String,
		required:[true, 'Student ID is required in this field'],
		minlength:[10,"Invalid student ID..... Does not meet the required requirement"]
		
	},
	email:{
		type:String,
		required:[true, 'An Email is required in this field'],
		unique:true,
		lowercase:true,
		validate: [validator.isEmail]
	},
	photo:String,
	password:{
		type:String,
		required:[true,'Please provide a password'],
		minlength:8,
		select:false
	},
	confirmPassword:{
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

userSchema.pre('save', async function(next){
	if(!this.isModified('password')) return next()

	this.password = await bcrypt.hash(this.password,12)
	this.confirmPassword = undefined	
	next()
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword){
	return  await bcrypt.compare(candidatePassword,userPassword)
}


const User = mongoose.model('User',userSchema)

module.exports = User