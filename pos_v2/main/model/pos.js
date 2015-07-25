
function Pos (scanner , cart){
  this.scanner = scanner;
  this.cart = cart;

}


Pos.prototype.scan = function (tag) {

  var cartItem = this.scanner.scan(tag);

  return this.cart.addCartItem(cartItem);

};


Pos.prototype.receipt = function (cartItems) {
  var print = new Receipt();
  return  print.receipt(cartItems);

};

