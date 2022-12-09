/*
문제 설명
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

balls! / {(balls-share)! * share!}
*/

//내 풀이 1
function solution(balls, share) {
  let total = 1;
  let divide = 1;
  let divide2 = 1;
  if (balls === share) return 1;
  for (let i = 1; i <= balls; i++) {
    total *= i;
    if (i <= share) {
      divide2 *= i;
    }
  }
  for (let i = 1; i <= balls - share; i++) {
    divide *= i;
  }
  console.log(total);
  console.log(divide);
  console.log(divide2);
  return Math.round(total / (divide * divide2));
}

//내 풀이 2
let factorial = (num) => {
  let result = BigInt(1);
  for (let i = 1; i <= num; i++) {
    result *= BigInt(i);
  }
  return result;
};

function solution(balls, share) {
  let 분자 = factorial(balls);
  let 분모 = factorial(balls - share) * factorial(share);

  return 분자 / 분모;
}
