const intro = document.querySelector('.intro')
const faded = document.querySelector('.faded')
const quotehead = document.querySelector('.quote-head')
const loader = document.querySelector('.loader')
const list = ["images/bg_1.jpg","images/bg_2.jpg","images/bg_3.jpg","images/bg_4.jpg","images/logo/fav_invert.jpg","images/bg-1.jpg"]
	const headline = [
		{
			brand:"Online Ordering",
			quote:"Caving For Something?"
		},
		{
			brand:"foodie",
			quote:"delicious specialty"
		},
		{
			brand:"foodie",
			quote:"mommies kitchen"
		},
		{
			brand:"foodie",
			quote:"best in town"
			
		},
		{
			brand:"foodie",
			quote:"nutritious & tasty"
			
		},
		{
			brand:"foodie",
			quote:"nutritious & tasty"
			
		}
	]
let i = 0;


	setInterval(()=>{
		
		if(i<list.length){
		intro.style.background ="url("+ list[i] +")"
		faded.classList.add("fade")
		quotehead.textContent = headline[i].quote;
		
		intro.classList.add("cl")
		setTimeout(()=>{
			faded.classList.remove("fade")
			intro.classList.remove("cl")
			
			
		},2000)
		
		   
		i++
	}else{
		i = 0
	}
	},10000)

/*
setTimeout(()=>{
	loader.classList.add("loader-fade")
},200)*/