var words = ["ground", "control", "to", "major", "tom"];


var map = function(array, fnc){
  var newArray = [];
  array.forEach(function(x){
    newArray.push(fnc(x))
  })
  return newArray;
}



console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));

