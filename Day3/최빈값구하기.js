/*
문제 설명
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
*/

function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);

  let 최빈값 = sortedArray[0];
  let maxCount = 0; // 최대 반복수
  let count = 0; // 반복문에서 세고 있는 수
  let prevValue = -1; //이전에 센 값
  if (sortedArray.length === 0) return 최빈값;

  sortedArray.forEach((num) => {
    count = 0;
    if (num !== prevValue) {
      prevValue = num;
      for (let i = 0; i < sortedArray.length; i++) {
        if (num === sortedArray[i]) count++;
      }

      if (maxCount < count) {
        maxCount = count;
        최빈값 = num;
      } else if (maxCount === count) {
        최빈값 = -1;
      }
    }
  });

  return 최빈값;
}

console.log(solution([1, 2, 2, 2, 2, 3, 3, 3, 4]));

// //Map 쓰는거
// https://velog.io/@jayjay8/JS-sort%EB%A1%9C-%EC%9D%B4%EC%A4%91%EB%B0%B0%EC%97%B4-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0

// //Map 안쓰는거
// https://leejams.github.io/%EC%B5%9C%EB%B9%88%EA%B0%92-%EA%B5%AC%ED%95%98%EA%B8%B0/
