function perform () {
  var args = [].slice.call(arguments);
  var callback = args.pop();
  var param = callback.apply(null, args);
 
  this.then = function (callback) {
    return perform(param, callback);
  }
  
  return this;
}

perform(null, function() {
  var param = 1;
  console.log(param); // 1
  return param;
})
  .then(function(param) { // param === 1
    console.log(++param); // 2
    return param;
  })
  .then(function(param) { // param === 2
    console.log(++param); // 3
    return param;
});