
'use strict';

function minNum(numbers) {
   
  let min = 0;
  let i=0;
  while (i <= numbers.length) {
    if (min > numbers[i]) {
      min = numbers[i];
    } 
    i++;
  }
  return min;
};

console.log(minNum([-5, 28, 98, -20013, 0.7878, 22, 115]));