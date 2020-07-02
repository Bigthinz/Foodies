

document.querySelector('.tabs').addEventListener('click', tabControl);


function tabControl(e){
	e.preventDefault()
	let elem = e.target,
		elemHref = elem.getAttribute('href')
		elemTab = document.querySelectorAll('.tabs ul li a')
		tabContents = document.querySelectorAll('.views .wrap .tab')


		if(elemHref != null && elemHref.indexOf('tab-')!=-1){
			
			if(elem.className.indexOf('active-tab') == -1){

				for(let i=0; i<elemTab.length; i++){
					elemTab[i].classList.remove('active-tab')
					tabContents[i].classList.remove('visible-tab')
				}

				elem.classList.add('active-tab')
				document.getElementById(elemHref).classList.add('visible-tab')
			}			

		}

	
			
}

