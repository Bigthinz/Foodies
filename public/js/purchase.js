// let add = document.querySelectorAll(".add-food")cons


(function addItem(){
    let products=[]
    const addIcon = document.querySelectorAll('.add-food')
    addIcon.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            e.preventDefault
            if(e.target.parentElement.classList.contains('rating') || e.target.parentElement.classList.contains('add-food')){
                e.preventDefault
                console.log('hurrai is working')
                
                
                if(btn.classList.contains('added')){
                    console.log('item already added')
                }else{
                    e.target.classList.add('added')
                    let item
                    let itemId = e.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].textContent
                    products.push(itemId)
                    localStorage.products += JSON.stringify(products)
                    console.log(products)


                    // let addtolocal = function(item,product){
                    //     var existing = localStorage.getItem(item);
                    //     existing = existing ? existing.split(',') : [];
                    //     existing.push(products);
                    //     localStorage.setItem(item, existing.toString())
                    //     console.log(existing)
                    // }

                    //addtolocal(item, itemId)


                   // localStorage.item += JSON.stringify({ "principalAmount": principal, "interestAmount": interest, "Period": years });
                   
                }
            }
        })
    })
})();






// (function cartBotton(){
// 	const cartBtn = document.querySelectorAll('.cart-btn');
// 	cartBtn.forEach((btn)=>{
// 		btn.addEventListener('click',(event)=>{
			
// 			//console.log(event.target.parentElement.classList.contains('row-items'))
// 		if(event.target.parentElement.classList.contains('row-items')){
			
			
// 			if(btn.classList.contains('clicked')){
// 			console.log("you added this item already");

// 			}
// 			else{

// 				event.target.classList.add("clicked")

// 				let imgSrc = event.target.parentElement.children[0].children[0].children[0].children[0].src;
// 				let imgPos = imgSrc.indexOf('Stocks')+6.;
// 				let imgPath = imgSrc.slice(imgPos);

// 				const products = {};
// 				 products.img =`cart-img${imgPath}`;
// 				 let prices = event.target.parentElement.children[0].children[1].children[2].textContent;
// 				 let itemName = event.target.parentElement.children[0].children[1].children[3].textContent;
// 				 let finalPrice = prices.slice(3).trim();
// 				 products.price = finalPrice;
// 				//console.log(products.img);

// 				const cartItem = document.createElement('div');
// 				cartItem.classList.add("each-item");

// 				cartItem.innerHTML = `
			
// 				<div class="const"><img src="${products.img}" alt=""></div>
// 				<div class="item-tag">
// 					<span class="const"><h3>${itemName}</h3></span>
// 					<span class="each-item-price const p-price"> ${prices}</span><span class="const">0</span>
// 					<span id = "trashbin const"><svg class="trashbin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/></svg></span>
// 				</div>
// 				`;
// 				cartItem.children[0].classList.add('cart-img')
// 				cartItem.children[1].children[0].classList.add('cart-each-item')
// 				cartItem.children[1].classList.add('cart-tag')
				

// 				let total =document.querySelector('.total');
// 				let cart2 =document.querySelector('#cart2');
// 				//total.before(cartItem,total);
// 				cart2.appendChild(cartItem);
// 				const cartBtn = document.querySelectorAll('.cart-btn');

// 				showTotal()
				
				
// 			}

// 		};
		
// 		removeItem();
// 		})
// 	});
