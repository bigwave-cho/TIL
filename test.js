// function solution(str1, str2) {
//     if(str1.indexOf(str2)>-1) return 1;
//     return 2;
// }

let solution = (str1, str2) => {
  console.log(str1.split(str2));
  return str1.includes(str2) ? 1 : 2;
};

solution('ab6CDE443fgh22iJKlmn1o', '6D');
