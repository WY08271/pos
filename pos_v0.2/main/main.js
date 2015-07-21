function printReceipt(inputs) {

  allItems = loadAllItems();
  var items = [];
  for(var i = 0; i < inputs.length; i++)
  {
    for(var k = 0; k < allItems.length; k++)
    {
      if( inputs[i] === allItems[k].barcode)
      {
        items.push(allItems[k]);
      }
    }
  }

  var cartItems = [];
  for(var i = 0; i < items.length; i++)
  {
    var itemOne = findItem(cartItems , items[i]);
    if(itemOne){
      itemOne.count++;
    }else{
      cartItems.push({item:items[i],count:1});
    }
  }

  var receipt =
    '***<没钱赚商店>收据***\n' +
    getItemsString(cartItems) +
    '----------------------\n' +
    '总计：' + formatPrice(getAmount(cartItems)) + '(元)\n' +
    '**********************';

  console.log(receipt);
}

function findItem(cartItems , items){
  for(var i = 0; i < cartItems.length; i++)
  {
    if(cartItems[i].item.barcode === items.barcode)
    {
      return cartItems[i];
    }
  }
}

function getSubTotal(count, price) {
  return count * price;
}

function getAmount(cartItems) {
  var amount = 0;

  cartItems.forEach(function(cartItem) {
    amount += getSubTotal(cartItem.count,cartItem.item.price);
  });

  return amount;
}

function getItemsString(cartItems) {
  var itemsString = '';
  //console.log(cartItems.length);
  cartItems.forEach(function(cartItem) {
    itemsString +=
      '名称：' + cartItem.item.name +
      '，数量：' + cartItem.count + cartItem.item.unit +
      '，单价：' + formatPrice(cartItem.item.price) +
      '(元)，小计：' + formatPrice(getSubTotal(cartItem.count, cartItem.item.price)) + '(元)\n';
  });

  return itemsString;
}

function formatPrice(price) {
  return price.toFixed(2);
}
