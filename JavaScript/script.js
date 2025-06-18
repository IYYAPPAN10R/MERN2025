function add(a,b){
    return a+b;
}
var mul = (a,b)=>
    a*b;

console.log(add(20,30));
console.log(mul(20,10));
var arr = [10,20,51];
var arr1 = [...arr,50];
var [m1,m2,m3] = arr;
console.log(m1);
console.log(m2);
console.log(m3);
function demo(){
    console.log("this is a demo function");
}
var callBack =  (func) =>{
    console.log("Hello From CAllback");
    func();
}

callBack(demo);

//map
var double = arr.map(num => num*num);
console.log(double);

//filter
var odd = arr.filter(num => num%2 != 0);
console.log(odd);

//reduce
var total = arr.reduce((val , num) => val+num ,0);
console.log(total);
