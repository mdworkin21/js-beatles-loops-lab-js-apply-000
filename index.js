function theBeatlesPlay(arr1, arr2) {
  let whatTheyPlay = []
  let str = ''

  for (let i = 0; i < arr1.length; i++) {
    
    whatTheyPlay.push(`${arr1[i]} plays ${arr2[i]}`);
  }

  return whatTheyPlay;

}