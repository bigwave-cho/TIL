// function solution(str1, str2) {
//     if(str1.indexOf(str2)>-1) return 1;
//     return 2;
// }

let solution = (str1, str2) => {
  return str1.includes(str2) ? 1 : 2;
};

// split을 통해 풀어보는 다른 사람 풀이
let solution = (str1, str2) => {
  console.log(str1.split(str2)); // split() 인자가 str1에 있으면 배열 길이가 2 이상될 것이고
  // 없으면 안 나눠지고 통짜바리로 하나만 들어감.
};

solution('ab6CDE443fgh22iJKlmn1o', '6D');
