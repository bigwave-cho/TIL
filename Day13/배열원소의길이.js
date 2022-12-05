function solution(strlist) {
  let result = [];
  strlist.forEach((word) => {
    result.push(word.length);
  });
  return result;
}
