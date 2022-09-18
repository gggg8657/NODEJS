var fs = require('fs');

//readFileSync

/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

console.log('A');

fs.readFile('syntax/sample.txt', 'utf8', function(err, result){//readfile 은 return 값을 변수에 주지 않음 두번째 파라미터에 파일의 내용을 인자로 줌
  console.log(result);
});

console.log('C');
//ACB -> 비동기라서, ACB 로 출력됨
