function solution(s) {
  let resultArr = [];
  let str = [...s];
  str.forEach((letter) => {
    str.indexOf(letter) === str.lastIndexOf(letter)
      ? resultArr.push(letter)
      : null;
  });
  return resultArr.sort().join('');
}

solution('abcabcadc');
