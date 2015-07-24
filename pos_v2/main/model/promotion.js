function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.prototype.promotionCalculate = function ( cartItem ,barcode ) {
  if(cartItem.item.barcode === barcode) {
    var number   = Math.floor(cartItem.count / 3);
    return ({ count : number , discountprice : (number * promotions[i].price) });
  }
}
