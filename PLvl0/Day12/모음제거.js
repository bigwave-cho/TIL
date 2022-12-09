// 첫 풀이
function solution(my_string) {
  let result = [];
  [...my_string].forEach((text) => {
    if (
      text !== 'a' &&
      text !== 'i' &&
      text !== 'e' &&
      text !== 'o' &&
      text !== 'u'
    )
      result.push(text);
  });
  return result.join('');
}

// 리팩토링 해보기
let solution = (my_string) => {
  const vowelArr = ['a', 'i', 'u', 'e', 'o'];
  return [...my_string]
    .filter((text) => vowelArr.indexOf(text) === -1)
    .join('');
};

solution('bus');
