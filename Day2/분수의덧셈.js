/*
문제 설명
첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

// 내 풀이
function solution(denum1, num1, denum2, num2) {
  var answer = [];
  const denum = denum1 * num2 + denum2 * num1; //18
  const num = num1 * num2; //9

  // if (denum >= num) {
  //   for (let i = 2; i <= num + 1; i++) {
  //     console.log(denum % i === 0, num % i === 0);
  //     if (denum % i === 0 && num % i === 0) {
  //       answer = [denum / i, num / i];
  //     }
  //   }
  // } else {
  //   for (let i = 2; i <= denum + 1; i++) {
  //     if (denum % i === 0 && num % i === 0) {
  //       answer = [denum / i, num / i];
  //     }
  //   }
  // }

  // Math.min 을 이용한 줄이기 성공!!
  for (let i = 2; i <= Math.min(denum + 1, num + 1); i++) {
    if (denum % i === 0 && num % i === 0) {
      answer = [denum / i, num / i];
    }
  }

  return answer.length !== 0 ? answer : [denum, num];
}

// 풀이
/*
기약분수 : 약분이 더 이상 1 외에는 불가한 분수. 따라서 2부터 반복문을 돌려주도록 설계

1. solution(1, 1, 1, 1); 이라면 
  2, 1 이 나오는데 이 때 반복문을 2부터 시작하면 조건식때문에 반복문이 동작하지 않는다.
  그래서 조건식에 +1 을 해주었다.



2. 처음에 answer.push를 했는데 아래와 같은 true true가 나오는 경우가 1개를 초과할 경우에는 
answer 배열의 요소가 2개를 초과하게 된다.  또한 기약분수란 분모와 분자의 최대공약수가 1인 분수이기 때문에
마지막 true true의 경우가 기약분수에 해당한다.
 
true false
true true
hi
false false
false false
true false
false false
false false
true true
hi
false false
[ 6, 3, 2, 1 ]
[ 6, 3, 2, 1 ]

*/

// 다른 풀이 (유클리드 호제법)
function fnGCD(a, b) {
  return a % b === 0 ? fnGCD(b, a % b) : b;
}
console.log(fnGCD(14, 5));
// a % b === 0 이면 a와 b의 최대공약수는 b다.
// a & b !== 0 이면 유클리드 호제법

// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0#:~:text=return%20lcm%0A%7D-,%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C%20%ED%98%B8%EC%A0%9C%EB%B2%95%EC%9D%84%20%EC%9D%B4%EC%9A%A9%ED%95%9C%20%EA%B5%AC%ED%98%84,-%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C%20%ED%98%B8%EC%A0%9C%EB%B2%95%EC%9D%98%20%EA%B8%B0%EB%B3%B8
