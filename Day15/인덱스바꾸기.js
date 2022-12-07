// 풀이

function solution(my_string, num1, num2) {
  let firstLetter = [...my_string].slice(num1, num1 + 1);
  let secondeLetter = [...my_string].slice(num2, num2 + 1);
  let result = [...my_string];

  result.splice(num1, 1, ...secondeLetter);
  result.splice(num2, 1, ...firstLetter);
  return result.join('');
}

// 리팩토링1
function solution(my_string, num1, num2) {
  let stringArr = [...my_string];
  stringArr.splice(num1, 1, my_string[num2]);
  stringArr.splice(num2, 1, my_string[num1]);

  return stringArr;
}

solution('hello', 1, 2);

// 다른풀이2
function solution(my_string, num1, num2) {
  let stringArr = [...my_string];
  stringArr[num1] = my_string[num2];
  stringArr[num2] = my_string[num1];

  return stringArr.join('');
}
