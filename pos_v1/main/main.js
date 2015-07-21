function printReceipt(barcodes) {

  var items = [];
  var allItems = loadAllItems();

  barcodes.forEach(function(barcode) {
    if(barcode.length > 11){
      items.push(unlinkBarcode(barcode , allItems));
    }
    else{
      var item = findItem(allItems, barcode );
      if (item) {
        items.push(item);
      }
    }
  });

  var cartItems = [];

  items.forEach(function (item) {
    var count = 1;
    if( item.count ){
      count = item.count;
    }
    var cartItem = findCartItem(cartItems, item.barcode);
    if (cartItem) {
      cartItem.count++;
    } else {
      cartItems.push({item: item, count: count});
    }
  });

  var  promotions = loadPromotions();
  var promotionsBarcodes = promotions[0].barcodes;
  var discountCartItems = [];

  promotionsBarcodes.forEach( function( promotionsBarcode ) {
    var discountCartItem = findDiscountItem( items , promotionsBarcode);
    if( discountCartItem ) {
      discountCartItems.push(discountCartItem);
    }
  });

  var receipt =
    '***<没钱赚商店>收据***\n' +
    getItemsString(cartItems , discountCartItems ) +
    '----------------------\n' + '挥泪赠送商品：\n' +
    getDiscountItemString(discountCartItems) +
    '----------------------\n'+
    '总计：' + formatPrice(getAmount(cartItems)-getDiscountAmount(discountCartItems)) + '(元)\n' +
    '节省：' + formatPrice(getDiscountAmount(discountCartItems)) + '(元)\n' +
    '**********************';
  console.log(receipt);
}

function getDiscountAmount(discountCartItems) {
  var amount = 0;
  discountCartItems.forEach(function (discountCartItem) {
    amount += getSubTotal( 1 , discountCartItem.price)
  });
  return amount;
}

function findDiscountItem(allItems , barcode){
 for(var i = 0; i < allItems.length; i++){
    if(allItems[i].barcode === barcode) {
      return allItems[i];
    }
  }
}

function getDiscountItemString(discountCartItems) {
 var discountItemsString = '';
 discountCartItems.forEach(function (discountCartItem) {
 discountItemsString +=
 '名称：' + discountCartItem.name +
 '，数量：' + '1' + discountCartItem.unit + '\n';
 });
  return discountItemsString;
 }

function findItem(items , barcode ){
  for (var i = 0; i < items.length; i++){
    if(items[i].barcode === barcode){
      return items[i];
    }
  }
}

function unlinkBarcode(barcode , allItems){
  var string = [];
  string = barcode.split('-');
  for(var i = 0; i < allItems.length; i ++) {
    if(string[0] === allItems[i].barcode) {
      allItems[i].count = string[1];
      return allItems[i];
    }
  }
}

function findCartItem(cartItems, barcode) {
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].item.barcode === barcode) {
      return cartItems[i];
    }
  }
}

function getSubTotal(count, price) {
  return count * price;
}

function getAmount(cartItems) {
  var amount = 0;
  cartItems.forEach(function (cartItem) {
    amount += getSubTotal(cartItem.count, cartItem.item.price);
  });
  return amount;
}


function getItemsString(cartItems , discountCartItems) {
  var itemsString = '';
  cartItems.forEach(function (cartItem) {
    var subTotal = getSubTotal(cartItem.count, cartItem.item.price);
    discountCartItems.forEach(function(discountCartItem){
      if(cartItem.item.barcode === discountCartItem.barcode){
        subTotal = getSubTotal(cartItem.count-1,cartItem.item.price);
      }
    });
    itemsString +=
      '名称：' + cartItem.item.name +
      '，数量：' + cartItem.count + cartItem.item.unit +
      '，单价：' + formatPrice(cartItem.item.price) +
      '(元)，小计：' + formatPrice(subTotal) + '(元)\n';
  });
  return itemsString;
}

function formatPrice(price) {
  return price.toFixed(2);
}
