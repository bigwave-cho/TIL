function solution(my_string) {
  let number = '';
  let count = 0;
  let result = 0;

  while (count <= my_string.length) {
    if (my_string[count] * 1 || my_string[count] === '0') {
      number += my_string[count];
    } else {
      if (number.length !== 0) result += number * 1;
      number = '';
    }
    count++;
  }
  return result ? result : 0;
}

// 리팩토링 해보기
