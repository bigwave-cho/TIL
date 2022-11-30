//내 풀이
function solution(my_string) {
  let array = [...my_string];
  let result = [];
  array.forEach((value) => {
    result.unshift(value);
  });

  return result.join('');
}
