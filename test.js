function solution(n, words) {
  let spokenWords = [words[0]];
  let order = 0; // 사람 순서
  let count = 1; // 몇 바퀴

  for (let i = 1; i <= words.length - 1; i++) {
    order = (i % n) + 1;
    count = Math.floor(i / n + 1);
    if (
      words[i][0] !== spokenWords[i - 1][spokenWords[i - 1].length - 1] ||
      spokenWords.includes(words[i])
    ) {
      break;
    } else {
      console.log('correct');
    }

    spokenWords.push(words[i]);
  }

  return spokenWords.length === words.length ? [0, 0] : [order, count];
}

solution(5, [
  'hello',
  'observe',
  'effect',
  'take',
  'either',
  'recognize',
  'encourage',
  'ensure',
  'establish',
  'hang',
  'gather',
  'refer',
  'reference',
  'estimate',
  'executive',
]);
