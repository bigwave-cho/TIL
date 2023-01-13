/*
문제 설명
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 내 풀이1
function solution(my_string, letter) {
  let result = '';

  [...my_string].forEach((value) => {
    if (value !== letter) {
      result += value;
    }
  });

  return result;
}

// 내 풀이2 (리팩토링)
function solution(my_string, letter) {
  return [...my_string]
    .map((value) => {
      if (value !== letter) return value;
    })
    .join('');
}
