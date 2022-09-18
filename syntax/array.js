//CRUD create read update delineated

//using array literal
// start with-> [ end with ->]

//how to create array
var arr = ['a','b','c','d'];

//how to read array

//read array with index
console.log(arr[1]);

//read all array
console.log(arr);

//read array with loop
var i = 0;
while(i<4){
  console.log(arr[i]);
  i+=1;
}

//check how long the array is
console.log(arr.length);

//array update ex) append.
arr.push('e');

console.log(arr);
