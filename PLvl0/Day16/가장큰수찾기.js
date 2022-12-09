function solution(array) {
  let maxNum = 0;
  array.forEach((num) => {
    if (num >= maxNum) maxNum = num;
  });
  return [maxNum, array.indexOf(maxNum)];
}

// 리팩토링
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
