
const btn =  document.querySelector('.lognbtn')
const spinner = document.querySelector('.spinner')




const login = async(index, password)=>{

	try{

		console.log("hey you")
		const result = await axios({
		method:"POST",
		url:"http://localhost:5000/api/v1/users/login",
		data:{
			student:index,
			password:password
			}
		})

		if(result.data.status === 'success'){
			showAlert('success', 'Logged in successfully')
			window.setTimeout(()=>{
				location.assign('/')
			},1500)
		}
		// console.log(result)
	}catch(err){
		showAlert('error', err.response.data.message)
		btn.textContent = 'Log in'
		
		console.log(err.response.data)
	}
}

const hideAlert= ()=>{
	const el = document.querySelector('.alert')
	if(el) el.parentElement.removeChild(el)
}


const showAlert = (type, message)=>{
	hideAlert()
	const markup = `<div class="alert alert--${type}">${message}</div>`
	document.querySelector('body').insertAdjacentHTML('afterbegin', markup)
	window.setTimeout(hideAlert,5000)
}


document.querySelector('.login-form').addEventListener('submit', e => {
	e.preventDefault()
	const index =  document.getElementById('index-number').value
	const password = document.getElementById('password').value
	
	btn.innerHTML = '<span class="spinner"><img src="/css/font/813.svg" alt=""></span>Loading...'

	login(index, password)
} )