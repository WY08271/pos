function printReceipt(inputs) {
 var result = '***<没钱赚商店>收据***\n';
 var total = 0;
 var allItems = loadAllItems();  
 for (var i = 0; i < inputs.length ; i++)
 {
 	var count = 1;
 	for(var k = 1 + i ; k < inputs.length ; k ++)
 	{
 		if( inputs[i] == inputs[k] )
 		{
 			count = count + 1 ; 
            inputs.splice( k , 1 );
            k --;
        }
    }
    for(var x = 0; x < allItems.length; x++)
    {
    	if(inputs[i] == allItems[x].barcode)
    	{
    		result = result + '名称：' + allItems[x].name + '，数量：' + count + allItems[x].unit + '，单价：' + allItems[x].price.toFixed(2) +'(元)，小计：'
 	               + (count * allItems[x].price).toFixed(2) + '(元)\n' ;
            total += count * allItems[x].price;
    	}
    }
 }
 result += '----------------------\n' + '总计：'+ total.toFixed(2) +'(元)\n' +  '**********************';
 console.log(result);
}