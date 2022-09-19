//first is data
//second is processing data
//is programming

//array, object

var f = function(){
    console.log(1+1);
    console.log(1+2);
}

//function 은 처리 할 일에 대한 구문이며, 값이다.

//var i = if(true){console.log(1)};

//var w = while(true){console.log(1)};

console.log(f);
f();

//함수는 서로 연관된 데이터를 그루핑 하는 객체

var a = [f];
console.log(a[0]);
a[0]();


var o = {
  func:f
}
console.log(o.func);
o.func();
