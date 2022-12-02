function solution(n) {
  let result = 0;

  for (let curNum = 1; curNum <= n; curNum++) {
    let count = 0;
    for (let i = 1; i <= curNum; i++) {
      curNum % i === 0 && count++;
    }
    count >= 3 && result++;
  }
  return result;
}
