function printReceipt(tags) {
  var cartItems = [];
   cartItems = new CartItem().cartItemList(cartItems, tags);
  var  discount = new discountCartItem();
  var a = discount.promotionType(cartItems);
  var receipt = new PrintCartItems().receipt(cartItems , a);
  console.log(receipt);
}
