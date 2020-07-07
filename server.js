
const dotenv = require('dotenv')
const mongoose = require('mongoose')

process.on('unhandledException', (err)=>{
	console.log('UNHANDLED EXCEPTION. Server is shutting down.....')
	console.log(err.name, err.message)
	process.exit(1)
})





dotenv.config({path: './.env'})
const app = require('./app')

// const DB = process.env.DATABASE_LOCAL
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useFindAndModify:false,
	useUnifiedTopology:true
}).then(con=>{
	console.log('Database Connected.......')
})



const PORT = process.env.PORT || 5000






app.listen(PORT, ()=>{
	console.log('Server is running....')
})


process.on('uncaughtRejection', (err)=>{
	console.log('UNCAUGHT REJECTION.  Server is shutting down.....')
	console.log(err.name, err.message)

	server.close(()=>{
		process.exit(1)
	})
})