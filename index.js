function theBeatlesPlay(musicians, instruments){
  var a = [];
  var s;
  for (var i = 0; i < musicians.length; i++, var j = 0; j++) {
    s = `${musicians[i]} plays ${instruments[j]}`
    a = [...a, s]
    a;
  }
  return a;
  
}


function iLoveTheBeatles(number){
  var x = [];
  do {
    x = [...x, "I love the Beatles!"]
    number++;
  } while (number < 15);
  return x;
}
