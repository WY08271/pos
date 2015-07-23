function Pos (){

}

Pos.prototype.scanner = function (tag) {

  var cartItem = [];

  var count = parseFloat(tag.split('-')[1] || 1);
  var barcode = tag.split('-')[0] ;

  var item = Item.find ( barcode );
  return ({item:item , count: count});
};


function getSubTotal(count, price) {
  return count * price;
}


function formatPrice(price) {
  return price.toFixed(2);
}

Pos.prototype.receiptCartItems = function ( cartItems ) {

  var itemsString = '';
  var promotion = new Promotion();

  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionCalculate(cartItem);
    itemsString += '名称：' + cartItem.item.name +
      '，数量：' + cartItem.count + cartItem.item.unit +
      '，单价：' + formatPrice(cartItem.item.price) +
      '(元)，小计：' + formatPrice( getSubTotal(cartItem.count , cartItem.item.price) - discount.discountprice) +
      '(元)\n';
  });
  return itemsString;
}

Pos.prototype.receiptDiscountCartItems = function (cartItems) {

  var discountString = '';
  var promotion = new Promotion();

  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionCalculate(cartItem);
      discountString += '名称：' + cartItem.item.name +
        '，数量：' + discount.count + cartItem.item.unit + '\n';
  });
  return discountString;
}


Pos.prototype.amount = function(cartItems) {

  var amount = 0;
  var promotion = new Promotion();

  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionCalculate(cartItem);
    amount += (getSubTotal(cartItem.count , cartItem.item.price) - discount.discountprice);
  });
  return amount;
};



Pos.prototype.discountamount = function(cartItems) {

  var discountamount = 0;
  var promotion = new Promotion();


  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionCalculate(cartItem);
    discountamount += discount.count  *  cartItem.item.price;
  });
  return discountamount;
};



Pos.prototype.receipt = function () {

  var now = new Utils();

  var printString = '***<没钱赚商店>收据***\n' +
    '打印时间：' + now.currentTime() +
    '\n----------------------\n' +
    this.receiptCartItems(cartItems) +
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    this.receiptDiscountCartItems(cartItems) +
    '----------------------\n' +
    '总计：' + formatPrice(this.amount(cartItems)) + '(元)\n' +
    '节省：' + formatPrice(this.discount(cartItems)) + '(元)\n' +
    '**********************';
  return printString;

}



