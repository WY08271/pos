function Utils () {

}

Utils.prototype.currentTime = function() {
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



/*
 <script type="text/javascript" src="main/model/print-cartItem.js"></script>
 <script type="text/javascript" src="main/model/cartitem.js"></script>
 <script type="text/javascript" src="main/model/discount-cartItem.js"></script>
 <script type="text/javascript" src="main/model/time.js"></script>
 */
