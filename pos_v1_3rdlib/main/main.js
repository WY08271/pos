function printReceipt(inputs){
	var result = '***<没钱赚商店>收据***\n';
	var allItems = loadAllItems(); 
	var total = 0;
	var promotions = loadPromotions();
	var barcodes = promotions[0].barcodes;
	var promot = 0;
	for(var i = 0; i < inputs.length; i++)
	{
		if(inputs[i].length < 11)
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
					var temp = barcodes.indexOf(inputs[i]);
                    if(temp !== -1)

                    {

					  result = result + '名称：' + allItems[x].name + '，数量：' + count + allItems[x].unit + '，单价：' 
    		                 + allItems[x].price.toFixed(2) +'(元)，小计：'
 	                         + ((count - 1) * allItems[x].price).toFixed(2) + '(元)\n' ;
 	                  total += count * allItems[x].price; 
 	                  break;                   	
                    }
					  result = result + '名称：' + allItems[x].name + '，数量：' + count + allItems[x].unit + '，单价：' 
    		                 + allItems[x].price.toFixed(2) +'(元)，小计：'
 	                         + (count * allItems[x].price).toFixed(2) + '(元)\n' ;
 	                  total += count * allItems[x].price;
    	        }
    	        
            }
		}
		else{
			var string = [];
			string = inputs[i].split('-');
			for(var x = 0; x < allItems.length; x++)
			{
				if(string[0] == allItems[x].barcode)
				{
					var temp = barcodes.indexOf(inputs[i]);
					if(temp == 1)
					{
						string[1] -= 1;
					}
					result = result + '名称：' + allItems[x].name + '，数量：' + string[1] + allItems[x].unit + '，单价：' 
    		                + allItems[x].price.toFixed(2) +'(元)，小计：'
 	                        + (string[1] * allItems[x].price).toFixed(2) + '(元)\n' ;
 	                total += string[1] * allItems[x].price;
				}
    	    }
            }
		}
		var save = 0;
		result +=  '----------------------\n' + '挥泪赠送商品：\n' ;
		for(var i = 0; i < barcodes.length; i++)
		{
			for(var k = 0; k < inputs.length; k++)
			{
				if(barcodes[i] == inputs[k])
				{
					for(var x = 0; x < allItems.length; x++)
					{
						if(inputs[k] == allItems[x].barcode)
						{
					        result += '名称：' + allItems[x].name + '，数量：1' + allItems[x].unit + '\n';
					        save += 1 * allItems[x].price.toFixed(2);							
						}
					}
				}
			}
		}
		result += '----------------------\n' + '总计：' + (total-save).toFixed(2) + '(元)\n' + '节省：' + save.toFixed(2) +
		       '(元)\n' + '**********************';
	console.log(result);
}
