function solution(spell, dic) {
  let count = 0;
  dic.forEach((char) => {
    count = 0;
    spell.forEach((word) => {
      if (char.includes(word)) {
        count++;
      }
    });
    if (count === spell.length) return 1;
  });
  return count === spell.length ? 1 : 2;
}
