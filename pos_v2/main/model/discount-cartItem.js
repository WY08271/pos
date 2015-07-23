function discountCartItem (){
}


discountCartItem.prototype.promotionType = function (cartItems){

  var promotions = loadPromotions();

  for(var i = 0; i < promotions.length; i++) {
    if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE') {

      cartItems.forEach(function(cartItem) {
        var promotion = promotions[i].barcodes.indexOf(cartItem.item.barcode);

        if(promotion !== -1){
          cartItem.discountCount = Math.floor(cartItem.count / 3);
        }

      });
    }
  }
}
