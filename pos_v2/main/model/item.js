function Item(barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
}
<<<<<<< HEAD
=======

>>>>>>> c3a6bde6446b9d4b063cec657a860b7c25997a67
Item.prototype.find = function ( barcode ) {

  var allItems = this.getAllItems();

  for(var i = 0; i < allItems.length; i ++) {
    if ( barcode === allItems[i].barcode) {
      return allItems[i];
    }
  }
}

Item.prototype.getAllItems = function () {

  return allItems = loadAllItems();

}
