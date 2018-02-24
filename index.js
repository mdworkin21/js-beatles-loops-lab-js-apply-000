function theBeatlesPlay(arr1, arr2) {
  let whatTheyPlay = []
  let str = ''

  for (let i = 0; i < arr1.length; i++) {
    str += arr1[i] + '  plays ' + arr2[i]
    whatTheyPlay.push(str);
  }

  return whatTheyPlay;

}