function Cart ( cartItems ) {
     this.cartItems = cartItems || [];
  }



 Cart.prototype.addCartItem = function ( cartItem ) {

     var index = this.findCartItem( cartItem.item.barcode , this.cartItems);
     alert(cartItem.item.barcode );
      if(index) {
        index.count += cartItem.count;
      } else {
        this.cartItems.push({item:cartItem.item , count : cartItem.count});
      }
  };


  Cart.prototype.findCartItem = function ( barcode , cartItems ) {

   for(var i = 0; i < cartItems.length; i++) {
       if(cartItems[i].item.barcode === barcode) {

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
