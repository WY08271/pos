function Scanner(){

}
Scanner.prototype.scan = function (tag) {

  var count = parseFloat(tag.split('-')[1] || 1);
  var barcode = tag.split('-')[0] ;

  var item = new Item();
  var itemOne = item.findItem ( barcode );

  return ({item:itemOne , count: count});
};
