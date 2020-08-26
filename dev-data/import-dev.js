const fs = require('fs')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Meals = require('./../model/foodModel.js')


dotenv.config({path: './../config.env'})

const DB = process.env.DATABASE_LOCAL

mongoose.connect(DB,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useFindAndModify:false,
	useUnifiedTopology:true
}).then(con=>{
	console.log('Database Connected.......')
})



const foods = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'))

const importData = async()=>{
	try{
		await Meals.create(foods)
		console.log('Data successfully loaded')

	}catch(err){
		console.log(err)
	}
}

if(process.argv[2] === "--import"){
	importData()
}

