function theBeatlesPlay(musicians, instruments){
  var a = [];
  var s;
  for (var i = 0; i < musicians.length; i++) {
    s = `${musicians[i]} plays ${instruments[i]}`
    a = [...a, s]
    a;
  }
  return a;
}

function johnLennonFacts(facts){
  var counter = 0;
  while (counter < facts.length) {
    console.log(`${facts[counter]}!!!`);
    counter++;
  }
}


function iLoveTheBeatles(number){
  var x = [];
  do {
    x = [...x, "I love the Beatles!"]
    number++;
  } while (number < 15);
  return x;
}
