function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.prototype.promotionCalculate = function ( cartItem ) {

  var promotions = loadPromotions();
  var spreadprice = [];

  for(var i = 0; i < promotions.length; i++) {
    if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE') {

        var promotion = promotions[i].barcodes.indexOf( cartItem.item.barcode );

        if(promotion !== -1){

           var number = Math.floor(cartItem.count / 3);
          spreadprice.push({ count : number , discountprice : (number * promotions[i].price) });
        }
    }
  }
  return spreadprice;
}
