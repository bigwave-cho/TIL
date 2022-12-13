function solution(N, stages) {
  let suc = {};
  let divide = stages.length;

  for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) count++;
    }
    console.log(divide);
    suc[i] = count / divide;
    divide = divide - count;
  }
  let resultArr = [];
  for (var index in suc) {
    resultArr.push([index, suc[index]]);
  }
  resultArr.sort((a, b) => {
    return b[1] - a[1];
  });
  return resultArr.map((arr) => Number(arr[0]));
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
