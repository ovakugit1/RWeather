function addPromise(a,b){
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number'){
      var sum = a + b;
      resolve(sum);
    } else {
      reject('comolokko');
    }
  });
}

addPromise(5,6).then(function(ret) {
  console.log(ret);
}, function(err){
  console.log('Both entries should be numbers !!');
});
