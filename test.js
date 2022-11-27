//반복문
// 최대값 변수 선언
// 반복문 안에 조건문 주고 충족 시 최대값 변수에 할당

function solution(numbers) {
  let maxResult = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] > maxResult)
        maxResult = numbers[i] * numbers[j];
    }
  }
  return maxResult;
}

solution([1, 2, 3, 4, 5]);
