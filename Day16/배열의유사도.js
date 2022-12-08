// 내풀이
function solution(s1, s2) {
  let count = 0;
  s1.forEach((index) => {
    if (s2.indexOf(index) > -1) count++;
  });
  return count;
}

//다른 사람 참고 리팩토링
const solution = (s1, s2) => {
  let commonIndex = s1.filter((v) => s2.includes(v));
  return commonIndex.length;
};
