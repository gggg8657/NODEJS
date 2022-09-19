var members = ['chad', 'k8805', 'jerry'];



console.log(members[1]); //k8805

var i = 0;
while(i<members.length){
  console.log('array loop', members[i]);
  i+=1;
}

var roles = {
  'programmer':'chad',
  'designer' : 'k8805',
  'manager' : 'jerry'
}
console.log(roles.designer); //k8805

for (var name in roles){
  console.log('object => ->',name, 'value -> ', roles[name],'\n');
}
