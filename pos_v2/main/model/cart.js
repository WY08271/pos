function Cart ( cartItems ) {
   this.cartItems = cartItems || [];
}



Cart.prototype.addCartItem = function ( cartItem ) {

 var index = this.findCartItem(cartItem);

  if(index) {
    this.cartItems[index].count += 1;
  } else {
    this.cartItems.push({item:cartItem.item , count : 1});
  }
};

Cart.prototype.findCartItem = function ( cartItem ) {
  for(var i = 0; i < this.cartItems.length; i++) {
    if(this.cartItems[i].item.barcode === cartItem.item.barcode) {
      return i;
    }
  }

};

Cart.prototype.promotionType = function ( cartItem ){

  var promotions = this.getPromotion();
  var promotion = new Promotion();
  var spreadprice = [];

  for(var i = 0; i < promotions.length; i++) {
    if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE') {
     spreadprice = promotion.promotionCalculate(cartItem , promotions[i].barcodes)
    }
  }
  return spreadprice;
};



Cart.prototype.getPromotion = function() {
    return loadPromotions();
};


