var number=[1,2,3,4,5,6,7,98,213,129,29,3432,41325,3421,4321,52341,4,23,523,14,324,25,213,4,235,1235];

var i=0, result=0;

while(i < number.length)
{
  console.log(result + number[i],'=', result ,'+', number[i]);
  result += number[i]
  i +=1;
}
console.log(`total : ${result}`);
