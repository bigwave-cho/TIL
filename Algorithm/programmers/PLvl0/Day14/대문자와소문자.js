// function solution(my_string) {
//   let result = '';
//   [...my_string].forEach((letter) => {
//     if (letter === letter.toLowerCase()) {
//       result += letter.toUpperCase();
//     } else {
//       result += letter.toLowerCase();
//     }
//   });
//   return result;
// }

// 리팩토링
function solution(my_string) {
  return [...my_string]
    .map((letter) => {
      return letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
    })
    .join('');
}

solution('cccCCC');
