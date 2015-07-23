function CartItem(item, count, promotionCount) {
  this.item = item;
  this.count = count || 0;
  this.promotionCount = promotionCount || 0;
}

CartItem.prototype.barcodeSplit = function (tag) {
  this.count = tag.split('-')[1] || 1;
  return tag.split('-')[0];
};

CartItem.prototype.increaseCartItems = function (cartItems, barcode) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].item.barcode === barcode) {
      var item =  cartItems[i];
    }
  }
  var cartItem = item;
  if (cartItem) {
    cartItem.count += this.count;
  } else {
    cartItems.push({
      item: this.item,
      count: this.count,
      promotionCount: this.promotionCount
    });
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

CartItem.prototype.newCartItem = function (cartItems, tag) {
  this.item = this.suppleItem(this.barcodeSplit(tag));
  return this.increaseCartItems(cartItems, this.barcodeSplit(tag));
};

CartItem.prototype.cartItemList = function (cartItems, tags) {
  var cartItem = [];
  for(var i = 0; i < tags.length; i++){
    cartItem = this.newCartItem(cartItems, tags[i]);
  }
  return cartItem;
};

