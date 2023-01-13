/*
문제 설명
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요. */

//내 풀이

function solution(rsp) {
  let result = '';
  [...rsp].forEach((item) => {
    if (item == 2) result += 0;
    if (item == 0) result += 5;
    if (item == 5) result += 2;
  });
  return result;
}

// 다른 풀이

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
  return answer;
}
