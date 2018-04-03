'use strict';

let numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function average (numList1) {
  let total = 0;
  numList1.forEach(function(value) {
    total = value + total;  
  });
 
  return (total / (numList1.length));
  

}



console.log(average(numList1));