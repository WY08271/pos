function printReceipt(tags) {
  var cartItems = [];
  cartItems = new CartItem().cartItemList(cartItems, tags);

  var discount = new discountCartItem();
  discount.promotionType(cartItems);

  var time = new Time();
  var nowTime = time.currentTime();

  var receipt = new PrintCartItems().receipt(cartItems , nowTime);
  console.log(receipt);
}
