var names = ['James', 'Andrew', 'Olof'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

var add = (a,b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
