function solution(n) {
  let result = 1;
  let multiple = 1;
  while (multiple <= n) {
    multiple = 1;

    for (let i = 1; i <= result; i++) {
      multiple *= i;
    }

    if (multiple === n) {
      return result;
    } else if (multiple > n) {
      return result - 1;
    } else {
      result++;
    }
  }
}

//다른 사람 풀이

function solution(n) {
  let i = 1; // 2. f에 1을 증가시켜가면서 계속 곱해주고
  let f = 1; // 1. 곱합 결과 기준을 두고
  while (f * i < n) f *= ++i; // i * f 가 n을 초과하는 순간 멈추고 i를 리턴.
  return i;
}
