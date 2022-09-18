//분명히 알고있는데 설명하지 못하는것은 이해가 아니라 익숙해진 것일뿐

function a(){
  console.log('a');
}

var tmp = function() {// js 에서는 함수가 변수다.
  console.log('b');
}

a();

tmp();

function slowfunc(callback){
  //함수 실행이 끝났으니, 다음일을 해라.
  callback(); //콜백 함수가 실행이 되는데 왜 tmp func 의 내용이 출력이 되냐.??? 
}

slowfunc(tmp);
