//내 풀이
let solution = (a, b) => {
  //최대공약수를 유클리드호제법 사용해서 간단하게!!
  let gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
  };
  // 분수를 기약분수화
  let denom = b / gcd(a, b); // 분모  2
  //분모를 소인수분해 한 것들 배열로 만들기.
  let divisionNum = 2;
  let arr = [];
  while (denom >= 2) {
    if (denom % divisionNum === 0) {
      arr.push(divisionNum);
      denom = denom / divisionNum;
    } else {
      divisionNum++;
    }
  }

  //배열에 2나 5가 아닌 것들 있으면 2 없으면 1
  return arr.find((num) => num !== 2 && num !== 5) ? 2 : 1;
};

// 다른 사람 풀이 따라해보기
let solution = (a, b) => {
  let gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
  };

  b = b / gcd(a, b);

  while (b % 2 === 0) {
    b = b / 2;
  }

  while (b % 5 === 0) {
    b = b / 5;
  }

  return b === 1 ? 1 : 2;
};
