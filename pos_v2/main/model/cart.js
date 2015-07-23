function Cart () {

}

Cart.prototype.amount  = function (cartItems) {
  var amount = 0;
   for (var i = 0 ; i < cartItems.length; i++) {
     amount += cartItems[i].count * cartItems[i].item.price;
   }
  return amount;
}
