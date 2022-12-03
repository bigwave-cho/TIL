// 내 풀인
function solution(n) {
  let num = n;
  let resultArr = [];

  for (let i = 2; i <= num; ) {
    if (num % i === 0) {
      num = num / i;
      resultArr.push(i);
      i = 2;
    } else {
      i++;
    }
  }

  return [...new Set(resultArr)];
}
