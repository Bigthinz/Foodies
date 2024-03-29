module.exports = function Cart(oldCart){
	this.items = oldCart.items,
	this.totalQty = oldCart.totalQty,
	this.totalPrice = oldCart.totalPrice

	this.add = function(item, id){
		let storedItem = this.items[id]

		if(!storedItem){
			this.storedItem = this.items[id] = {item: items, qty: "0", price: "0"}
		}

		storedItem.qty++
		storedItem.price = storedItem.item.price * storedItem.qty
		this.totalQty++
		this.totalPrice += storedItem.price

		this.generateArray = function(){
			let arr = []

			for( let id in this.items){
				arr.push(this.items[id])
			}

			return arr
		}
	}
}