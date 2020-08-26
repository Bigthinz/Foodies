const AppError = require('./../utils/appError')

const handleCastErrorDB = (err)=>{
	let message = `Invalid ${err.path}: ${err.value}`;
	return  new AppError(message,400)
}

const handleDuplicateErrorDB = (err)=>{
	let value = err.errmsg.match(/(["'])(?:\\.|[^\\])*?\1/)[0]
	let message = `Duplicate field value: ${value}. Please use another value`
	return new AppError(message,404)

}

const handleValidationErrorDB = (err)=>{
	const errors = Object.values(err.errors).map(el => el.message)
	const message = `Invalid input data ${errors.join('. ')}`

	return new AppError(message,400)
}

//HANDLING JWT TOKEN ERRORS
const handleJWTError = err => new AppError('Invalid Token!. Please log in again',401)
const handeleExpiredError = err => new AppError('Your token has expired!. Please login again',401)


const sendErrorDev = (err,res)=>{
	res.status(err.statusCode).json({
		status:err.status,
		error:err,
		message:err.message,
		stack: err.stack
	})
}


const sendErrorProd = (err,res)=>{
	if(err.isOperational){
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message
		})
	}else{
		console.log('Error', err)
		res.status(500).json({
			status:'Error',
			message:'Something went wrong'
		})
	}
}



module.exports = (err,req,res,next)=>{
	err.statusCode = err.statusCode || 500
	err.status = err.status || 'Error'

	if(process.env.NODE_ENV === 'development'){
		sendErrorDev(err,res)

	}else if(process.env.NODE_ENV === 'production'){
		let error = {...err}

		if(error.name === 'CastError') error = handleCastErrorDB(error)
		if(err.code === 11000)	error = handleDuplicateErrorDB(error)
		if(err.name === 'ValidationError') error = handleValidationErrorDB(error)
		if(error.name === 'JsonWebTokenError') error = handleJWTError(error)
		if(error.name === 'TokenExpiredError') error = handeleExpiredError(error)
	

		sendErrorProd(error,res)	



	}
}