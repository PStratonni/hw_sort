const numbers = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, -37];
let max;
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      max = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = max;
    }
  }
}
console.log(numbers);
const numberss = [24, 5, 800, 20, 6, 44, -5, 0, 3, -10, 3.5, -37];
for (let i = numberss.length - 1; i > 0; i--) {
  for (let j = numberss.length - 1; j > numberss.length-1-i; j--) {
    if (numberss[j] < numberss[j - 1]) {
      max = numberss[j];
      numberss[j] = numberss[j - 1];
      numberss[j - 1] = max;
    }
  }
}
console.log(numberss);
