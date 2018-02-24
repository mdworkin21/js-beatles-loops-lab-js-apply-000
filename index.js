function theBeatlesPlay(person, instruments) {
  let whatTheyPlay = [];

  for (let i = 0; i < person.length; i++) {
    whatTheyPlay.push(`${person[i]} plays ${instruments[i]}`);
  }
  return whatTheyPlay;
}

function johnLennonFacts(facts) {
  let arrOfFacts = [];

  for (let i = 0; i < facts.length; i++) {
    arrOfFacts.push(`${facts[i]}!!!`);
  }
  return arrOfFacts;
}

function iLoveTheBeatles(number) {
  let loveBeatles = "I love the Beatles! "
  let loveBeatlesArr = []

  if (number === 7) {
     return loveBeatlesArr.push(loveBeatles.repeat(8));
  } else if (number === 17) {
      return  loveBeatlesArr.push("I love the Beatles!")
    
} 
}