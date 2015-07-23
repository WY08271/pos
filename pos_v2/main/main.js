function printReceipt(tags) {
  var cartItems = [];
   cartItems = new CartItem().cartItemList(cartItems, tags);
  var  discount = new discountCartItem();
  discount.promotionType(cartItems);
  var receipt = new PrintCartItems().receipt(cartItems);
  console.log(receipt);
}
