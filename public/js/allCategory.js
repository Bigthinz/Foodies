

document.querySelectorAll('.cate-list .listing a').forEach( tab =>{
	tab.addEventListener('click', tabbing,false)	
})

function tabbing(e){
	e.preventDefault()
	let elem,
		elemHref ,
		tab = document.querySelectorAll('.cate-list .listing a'),
		tabContent = document.querySelectorAll('.joint-wrap .work')

	if(e.target.parentNode.parentNode.classList.contains('tab')){
		elem = e.target.parentNode.parentNode
		elemHref = elem.getAttribute('href')
			
	}

	if(e.target.classList.contains('tab')){
		elem = e.target
		elemHref = elem.getAttribute('href')
	}
	
	if(elemHref != null && elemHref.indexOf('tab-') !=-1){
		console.log(tabContent)


		if(elem.className.indexOf('active') == -1){

			for(let i = 0; i < tab.length; i++){
				tab[i].classList.remove('active')
				tabContent[i].classList.remove('visible')
				
			}

			
			elem.classList.add('active')
			console.log(elemHref)
			document.querySelector(`#${elemHref}`).classList.add('visible')
			// document.getElementById(`#${elemHref}`).classList.add('visible')
			
	
			


		}
		// document.getElementById(elemHref).classList.add('visible')
	}

		// console.log(tab)
		// console.log(tabContent)
}