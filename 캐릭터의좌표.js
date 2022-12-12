function solution(keyinput, board) {
  let resultArr = [0, 0];

  keyinput.forEach((input) => {
    if (input === 'left') {
      //0.5
      if (resultArr[0] > -(board[0] / 2 - 1)) {
        resultArr = [resultArr[0] - 1, resultArr[1]];
      }
    } else if (input === 'right') {
      if (resultArr[0] < board[0] / 2 - 1) {
        resultArr = [resultArr[0] + 1, resultArr[1]];
      }
    } else if (input === 'up') {
      if (resultArr[1] < board[1] / 2 - 1) {
        resultArr = [resultArr[0], resultArr[1] + 1];
      }
    } else if (input === 'down') {
      if (resultArr[1] > -(board[1] / 2 - 1)) {
        resultArr = [resultArr[0], resultArr[1] - 1];
      }
    }
  });
  return resultArr;
}

solution(['down', 'up'], [3, 3]);
