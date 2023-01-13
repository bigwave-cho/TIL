function solution(num, k) {
  let numbers = num.toString();
  let numberArr = [...numbers];

  return numberArr.indexOf(k.toString()) > -1
    ? numberArr.indexOf(k.toString()) + 1
    : -1;
}

// 리팩토링해보기
let solution = (num, k) => {
  return String(num).indexOf(String(k)) > -1
    ? String(num).indexOf(String(k)) + 1
    : -1;
};

solution(29183, 1);
