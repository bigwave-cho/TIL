function solution(numbers) {
  let result = -100000001;

  numbers.forEach((num, i) => {
    for (let j = i + 1; j <= numbers.length; j++) {
      let calc = num * numbers[j];

      if (calc >= result) result = calc;
    }
  });

  return result;
}

// -1, 1 넣으면 -1 인데 초기값을 처음에 0이라고 설정해서 7번테스트 틀렸음
// 위와 같이 초기값ㅇ르 억지로 설정하던가
// 배열화 해서 max값 구해보는 것도 괜찮을듯.
