function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.prototype.promotionCalculate = function ( cartItem ,barcodes ) {
  for(var i = 0; i < barcodes.length; i ++)
  {
    if(cartItem.item.barcode === barcodes[i]) {
      var number   = Math.floor(cartItem.count / 3);
      return ({ name: cartItem.item.name , count : number , discountprice : (number * cartItem.item.price) });
    }
  }

}
