/*To complete this drill, you need to implement 2 functions, max and min. Both functions should take a single argument: 
an array of numbers called numbers. max(numbers) should return the largest number in the array, while min(numbers) should 
return the smallest.

Assume that the numbers input only contains numbers (that is, you don't have to inspect your inputs to confirm they only contain
 numbers).

If the numbers array is empty, then both max and min should return null or undefined, whichever is more convenient.*/

'use strict';

function max(numbers) {
    //defining the maxNum
    let maxNum = 0;
    //iterating through the array
    let i=0;
    while (i <= numbers.length) {
        if (maxNum < numbers[i]) {
        maxNum = numbers[i];
        } 
        i++;
    }
    return maxNum;
};

console.log(max([-5, 28, 98, -20013, 0.7878, 22, 115]));