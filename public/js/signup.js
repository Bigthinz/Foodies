
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


const signUp = async(student,email, password,confirmPassword)=>{
	try{
	const result = await axios({
		method: 'POST',
		url: 'http://localhost:5000/api/v1/users/signup',
		data:{
			student,
			email,
			password,
			confirmPassword
		}
	})

	if(result.data.status === 'success'){
			showAlert('success', 'Signed in successfully')
			window.setTimeout(()=>{
				location.assign('/')
			},1500)
		}

	}catch(err){
		showAlert('error', err.response.data.message)
		console.log(err.response.data.message)
	}
}



document.querySelector('.sign-form').addEventListener('submit', e =>{
	e.preventDefault()
	const student = document.querySelector('.student').value
	const email = document.querySelector('.email').value
	const password = document.querySelector('.password').value
	const confirmPassword = document.querySelector('.confirmPassword').value

	signUp(student,email, password,confirmPassword)
})