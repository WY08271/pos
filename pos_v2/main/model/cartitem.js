function CartItem(item, count, discountCount) {
  this.item = item;
  this.count = count || 0;
  this.discountCount = discountCount || 0;
}


CartItem.prototype.barcodeSplit = function (tag) {
  this.count = tag.split('-')[1] || 1;
  return tag.split('-')[0];
};


CartItem.prototype.increaseCartItems = function (cartItems, barcode) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].item.barcode === barcode) {

      var item = cartItems[i];

    }
  }

  var cartItem = item;

  if (cartItem) {
    cartItem.count += this.count;
  } else {
    cartItems.push({item: this.item, count: this.count, discountCount: this.discountCount});
  }
  return cartItems;
};


CartItem.prototype.suppleItem = function (barcode) {

  var allItems = loadAllItems();

  for (var i = 0; i < allItems.length; i++) {
    if (allItems[i].barcode === barcode) {
      return allItems[i];
    }
  }
};


CartItem.prototype.cartItemList = function (cartItems, tags) {

  var cartItem = [];

  for(var i = 0; i < tags.length; i++){
    this.item = this.suppleItem(this.barcodeSplit(tags[i]));
    cartItem =  this.increaseCartItems(cartItems , this.barcodeSplit(tags[i]));
  }
  return cartItem;
};
