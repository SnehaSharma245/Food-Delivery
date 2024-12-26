const itemId= "item_3"
const cartItems = {}
cartItems[itemId] = 5 // ye key banayega item_3 naam ki
console.log((cartItems))
// cartItems.itemId = 5 --> ye key banayega "itemId" naam ki
const obj = {...cartItems , [itemId] : 6} // isme pue cartItems object ko destructure kiya aur us key ko set kiya jo itemId variable represent kar rha hai -> item_3
console.log(obj)