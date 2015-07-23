function PrintCartItems() {
}

PrintCartItems.prototype.getCurrentTime = function() {
  var dateDigitToString = function(num) {
    return num < 10 ? '0' + num : num;
  };
  var currentDate = new Date(),
    year = dateDigitToString(currentDate.getFullYear()),
    month = dateDigitToString(currentDate.getMonth() + 1),
    date = dateDigitToString(currentDate.getDate()),
    hour = dateDigitToString(currentDate.getHours()),
    minute = dateDigitToString(currentDate.getMinutes()),
    second = dateDigitToString(currentDate.getSeconds()),
    formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  return formattedDateString;
};

PrintCartItems.prototype.itemString = function(cartItems) {
  var itemsString = '';
  cartItems.forEach(function(cartItem) {
    itemsString +=
      '名称：' + cartItem.item.name +
      '，数量：' + cartItem.count + cartItem.item.unit +
      '，单价：' + formatPrice(cartItem.item.price) +
      '(元)，小计：' + formatPrice(getSubTotal(cartItem.count-cartItem.promotionCount, cartItem.item.price)) + '(元)\n';
  });
  return itemsString;
};

PrintCartItems.prototype.discountString = function(cartItems) {
  var discountString = '';
  cartItems.forEach(function(cartItem) {
    if(cartItem.promotionCount) {
      discountString +=
        '名称：' + cartItem.item.name +
        '，数量：' + cartItem.promotionCount + cartItem.item.unit + '\n';
    }
  });
  return discountString;
};

PrintCartItems.prototype.amount = function(cartItems) {
  var amount = 0;
  cartItems.forEach(function(cartItem) {
    amount += getSubTotal(cartItem.count - cartItem.promotionCount, cartItem.item.price);
  });
  return amount;
};

PrintCartItems.prototype.discount = function(cartItems) {
  var discount = 0;
  cartItems.forEach(function(cartItem) {
    discount += cartItem.promotionCount * cartItem.item.price;
  });
  return discount;
};

function getSubTotal(count, price) {
  return count * price;
}

function formatPrice(price) {
  return price.toFixed(2);
}

PrintCartItems.prototype.receipt = function(cartItems ) {
  var receipt = '***<没钱赚商店>收据***\n' +
    '打印时间：' + this.getCurrentTime() +
    '\n----------------------\n' +
    this.itemString(cartItems) +
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    this.discountString(cartItems) +
    '----------------------\n' +
    '总计：' + formatPrice(this.amount(cartItems)) + '(元)\n' +
    '节省：' + formatPrice(this.discount(cartItems)) + '(元)\n' +
    '**********************';
  return receipt;
}

