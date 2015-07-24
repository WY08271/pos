function Receipt () {

}

function getSubTotal(count, price) {
  return count * price;
}


function formatPrice(price) {
  return price.toFixed(2);
}

Receipt.prototype.receiptCartItems = function ( cartItems ) {

  var itemsString = '';
  var promotion = new Cart();

  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionType(cartItem);

    itemsString += '名称：' + cartItem.item.name +
      '，数量：' + cartItem.count + cartItem.item.unit +
      '，单价：' + formatPrice(cartItem.item.price) +
      '(元)，小计：' + formatPrice( getSubTotal(cartItem.count , cartItem.item.price) - discount.discountprice) +
      '(元)\n';
  });
  return itemsString;
}

Receipt.prototype.receiptDiscountCartItems = function (cartItems) {

  var discountString = '';
  var promotion = new Cart();

  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionType(cartItem);

    discountString += '名称：' + cartItem.item.name +
      '，数量：' + discount.count + cartItem.item.unit + '\n';
  });
  return discountString;
}


Receipt.prototype.amount = function(cartItems) {

  var amount = 0;
  var promotion = new Cart();

  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionType(cartItem);
    amount += (getSubTotal(cartItem.count , cartItem.item.price) - discount.discountprice);
  });
  return amount;
};



Receipt.prototype.discountamount = function(cartItems) {

  var discountamount = 0;
  var promotion = new Cart();

  cartItems.forEach(function(cartItem) {
    var discount = promotion.promotionType(cartItem);
    discountamount += discount.count  *  cartItem.item.price;
  });

  return discountamount;
};



Receipt.prototype.receipt = function (cartItems) {

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
    '节省：' + formatPrice(this.discountamount(cartItems)) + '(元)\n' +
    '**********************';

  console.log(printString);

}
