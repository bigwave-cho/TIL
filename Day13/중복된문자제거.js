// 일반적인 for문 이용
function solution(my_string) {
  let result = '';
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.indexOf(my_string[i]) === i) {
      result += my_string[i];
    }
  }
  return result;
}

// new Set 이용.

function solution(my_string) {
  return Array.from(new Set([...my_string]));
}

solution('We are the world');
