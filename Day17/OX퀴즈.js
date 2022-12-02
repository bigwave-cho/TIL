function solution(quiz) {
  let answer = [];
  let 퀴즈 = [];
  let resultArr = [];

  quiz.forEach((item) => {
    answer.push(item.split(' ')[item.split(' ').length - 1]);
    퀴즈.push(item.split(' ').slice(0, item.split(' ').length - 2));
  });

  퀴즈.forEach((item) => {
    if (item[1] === '-') resultArr.push(item[0] * 1 - item[2] * 1);
    if (item[1] === '+') resultArr.push(item[0] * 1 + item[2] * 1);
  });

  let result = [];
  for (let i = 0; i < resultArr.length; i++) {
    if (answer[i] * 1 === resultArr[i] * 1) {
      result.push('O');
    } else {
      result.push('X');
    }
  }
  return result;
}
