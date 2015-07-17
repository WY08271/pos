function printReceipt(inputs) {
 var result = '***<没钱赚商店>收据***\n';
 var total = 0;

 for (var i = 0; i < inputs.length ; i++)
 {
 	var count = 1;
 	for(var k = 1 + i ; k < inputs.length ; k ++)
 	{
 		if( inputs[i].barcode == inputs[k].barcode )
 		{
 			count = count + 1 ; 
            inputs.splice( k , 1 );
            k --;
        }
    }
    result = result + '名称：' + inputs[i].name + '，数量：' + count + inputs[i].unit + '，单价：' + inputs[i].price.toFixed(2) +'(元)，小计：'
 	               + (count * inputs[i].price).toFixed(2) + '(元)\n' ;
    total += count * inputs[i].price; 
 }
 result += '----------------------\n' + '总计：'+ total.toFixed(2) +'(元)\n' +  '**********************';
 console.log(result);
}
