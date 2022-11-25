/*
문제 설명
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

//내 풀이
/*
n과 6의 최소공배수를 구하고 
최소공배수 / 6 === 총 판수

*/ 내 풀이

function solution(n) {
  let 총피자조각 = 1;

  while (true) {
    if (총피자조각 % n == 0 && 총피자조각 % 6 == 0) {
      break;
    }
    총피자조각++;
  }

  return 총피자조각 / 6;
}

// 다른 개 쩌는 풀이

function solution(n) {
    for (let i = n; ; i+=n) {
        if (i % 6 === 0) {
            return i / 6;
        }
    }
}

//참고 https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98GCD-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98LCM-%EA%B5%AC%ED%95%98%EA%B8%B0
