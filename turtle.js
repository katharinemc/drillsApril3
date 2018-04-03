'use strict';

let turtleArray =[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function noBackSteps(arr) {
  return arr.filter(steps => (steps[0] >= 0 && steps[1] >= 0));
}

function totalSteps(array) {
  let resultArray = array.map(step => step[0] + step[1]);
  return resultArray;
}

console.log(stepsInEachCase(totalSteps(noBackSteps(turtleArray))));
/*Use the forEach method to log out how many steps the turtle took in each case.*/
function stepsInEachCase(array) {

  array.forEach(function(x){
    console.log(`The turtle took ${x} steps.`);
  }
  );
}