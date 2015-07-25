function printReceipt (tags) {


  var scanner = new Scanner();
  var cart = new Cart();

  var pos = new Pos (scanner , cart);

  for(var i = 0; i < tags.length; i++){

    var cartItem = pos.scan(tags[i]);
  }

var print  = pos.receipt(cart.cartItems);
  console.log(print);

}
