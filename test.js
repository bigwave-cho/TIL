function solution(age) {
  let stringAge = age.toString();
  let convertedAge = '';

  [...stringAge].forEach((num) => {
    if (num == 0) convertedAge += 'a';
    if (num == 1) convertedAge += 'b';
    if (num == 2) convertedAge += 'c';
    if (num == 3) convertedAge += 'd';
    if (num == 4) convertedAge += 'e';
    if (num == 5) convertedAge += 'f';
    if (num == 6) convertedAge += 'g';
    if (num == 7) convertedAge += 'h';
    if (num == 8) convertedAge += 'i';
    if (num == 9) convertedAge += 'j';
  });
  return convertedAge;
}

solution(51);
