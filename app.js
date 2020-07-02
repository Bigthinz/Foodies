const fs  = require('fs')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const fetch = require('node-fetch')
const cookieParser = require('cookie-parser')
const globalErrorHandler = require('./controllers/errorController')
const AppError = require('./utils/appError')
const userAuth = require('./routes/auth')
const overView = require('./routes/viewRoute')
const userRoutes = require('./routes/userRoutes')
const foodRoutes = require('./routes/foodRoutes')
const restaurant = require('./routes/restaurantRoute')







const app = express()


app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'))
}



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') 


// app.get('/', (req,res)=>{
// 	/*fetch('http://localhost:5000/api/v1/meals')
// 	.then(data => {
// 		console.log(data)
// 	})*/

// 	const url = 'http://localhost:5000/api/v1/meals'
// 	const get_data = async url =>{
// try{
// 	const response = await fetch(url)
// 	const json = await response.json()
// 	const meal = await json.data.meals
// 	console.log(meal)

// }catch(err){
// 	console.log(err)
// }
// }

//  console.log(get_data(url))


		
// 	res.render('pages/category', {dataObj, dataObj1})
// })

app.use('/', overView)
app.use('/auth', userAuth)
app.use('/auth',userAuth)
app.use('/auth', userAuth)




/*app.use('/all', overView)
app.use('/all/login',overView)*/

app.use('/api/v1/meals', foodRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/restaurant', restaurant)

app.get('/index', (req,res)=>{
	res.render("pages/index")
})

app.get('/register', (req,res)=>{
	/*console.log(req.body)
*/	res.render('pages/register')
})

app.get('/driver', (req,res)=>{
	res.render('pages/driver')
})

app.get('/all', (req,res)=>{
	console.log(req.body)
	res.render('pages/all',{dataObj})
})

app.get('/signup',(req,res)=>{
	res.render('pages/signup')
})

/*app.get('/login',(req,res)=>{
	
	res.render('pages/login')
})
*/

app.all('*', (req,res,next)=>{

	next(new AppError(`Cant find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)

module.exports = app
