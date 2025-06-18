var arr = [10,3,4,6,30,88,32];
var div = arr.map(a => a/2);
var check  = div.filter(a => a >= 5);
var result = check.reduce((val , a) => val+a , 0);
console.log(result);
