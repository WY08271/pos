function Cart ( cartItems ) {
  this.cartItems = cartItems;
  }



 Cart.prototype.addCartItem = function ( cartItem , cartItems ) {


     var index = this.findCartItem( cartItem , cartItems);

      if(index) {
        index.count += cartItem.count;
      } else {
        cartItems.push({item : cartItem.item , count : index.count});
      }

  };


  Cart.prototype.findCartItem = function ( cartItem , cartItems ) {

      for(var i = 0; i < cartItems.length; i++) {
        if(cartItems[i].item.barcode === cartItem.barcode) {

          return cartItems[i];

      }
    }
    };

  Cart.prototype.promotionType = function ( cartItem ){

  var promotions = this.getPromotion();
    var promotion = new Promotion();
    var spreadprice = [];

      for(var i = 0; i < promotions.length; i++) {
       if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE') {
           spreadprice.push(promotion.promotionCalculate(cartItem , promotions[i].barcodes)) ;
       }
      }
    return spreadprice;
  };



      Cart.prototype.getPromotion = function() {
      return loadPromotions();
};
