function printReceipt (tags) {


  var scanner = new Scanner();
  var cart = new Cart();
  var cartItems = [];

  var pos = new Pos (scanner , cart);

  for(var i = 0; i < tags.length; i++){

    var cartItem = scanner.scan(tags[i]);
    console.log(cartItem);
     // cart.addCartItem(cartItem);
   // cartItems = pos.scan(tags[i]);

  }

   pos.receipt(cartItems);

}
