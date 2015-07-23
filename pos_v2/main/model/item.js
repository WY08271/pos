function Item(barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
}

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
