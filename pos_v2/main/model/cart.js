function Cart (  ) {
  this.cartItems = [];
  }



 Cart.prototype.addCartItem = function ( cartItem ) {

     var index = this.findCartItem( cartItem.item.barcode );

      if(index) {
        index.count += cartItem.count;
      } else {
        this.cartItems.push({item : cartItem.item , count : cartItem.count});
      }
  };


Cart.prototype.findCartItem = function (barcode) {
  for(var i = 0; i < this.cartItems.length; i++) {
    if(this.cartItems[i].item.barcode === barcode) {
      return this.cartItems[i];
    }
  }
};



  Cart.prototype.promotionType = function ( cartItem ){
  var promotions = this.getPromotion();
    var promotion = new Promotion();
    var spreadprice = [];

      for(var i = 0; i < promotions.length; i++) {
       if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE') {
         var temp = promotion.promotionCalculate(cartItem , promotions[i].barcodes);
         if(temp){
          alert(temp);
           spreadprice.push(temp) ;
         }
       }
      }

    return spreadprice;
  };

      Cart.prototype.getPromotion = function() {
      return loadPromotions();
};
