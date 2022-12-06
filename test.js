function solution(d, budget) {
  if (d.sort((a, b) => a - b)[0] > budget) return 0; // 가장 작은 수가 예산 초과 시 0 반환
  if (d.reduce((acc, cur) => acc + cur) <= budget) return d.length; // 모든 배열 요소 더했을 때 예산 이하면 해당 배열길이 반환

  //모든 배열 요소 합이 예산 초과 시.
  let total = 0;
  let count = 0;
  while (total < budget) {
    count++;
    console.log(d.sort((a, b) => a - b)[count - 1]);
    total += d.sort((a, b) => a - b)[count - 1];
  }
  return total > budget ? count - 1 : count;
}
console.log(solution([1, 2, 4], 6));
