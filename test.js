function solution(num, total) {
  let result = [];
  let sumNum = 0;

  for (let i = -100; i <= 100; i++) {
    sumNum = 0;

    let count = 0;
    while (count < num) {
      sumNum += i + count;
      count++;
    }

    if (sumNum === total) {
      for (let j = 0; j < num; j++) {
        result.push(i + j);
      }
    }
  }
  return result;
}

console.log(solution(3, 12));
