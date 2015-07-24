function Pos (scanner , cart){
  this.scanner = scanner;
  this.cart = cart;

}


Pos.prototype.scan = function (tags) {

  for(var i = 0; i < tags.length; i ++) {
    var cartItem = this.scanner.scan(tags[i]);

    this.cart.addCartItem( cartItem );
  }
  return this.cart;
}



