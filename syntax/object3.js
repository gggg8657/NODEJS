var v1 = 'v1';
//100000 lines of code
v1 = 'chad';
var v2 = 'v2';


var k = {
  v1 : 'v1',
  v2 : 'v2',
  f1 : function(){
    console.log(this.v1);
  },
  f2 : function(){
    console.log(this.v2);
  }
}
//연관된 값을 하나의 객체에 넣어두는 상황.

k.f1();
k.f2();
/*
function f1()
{
  console.log(o.v1);
}
*/
/* if 아래와 같은 함수가 재정의 된다면, f1 함수는 효력을 잃는다.
함수가 객체 안에서 사용될때, 함수가 자신이 속해있는 객체에 접근하는 방식 this
function f1(){

}
함수가 값인것을 활용하면,
 */
/*
function f2(){
  console.log(o.v2);
}

f1();
f2();
*/
