'use strict';

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
 
  //Why does JS not mind that nothing is passed to this function? Is it because the function returns, but isn't run?
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today.`)
  };

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const avalancheWarning = hazardWarningCreator('Avalanche Imminent');
const hurricaneWarning = hazardWarningCreator('Heavy Floods and Rain');

rocksWarning('Main Street');
rocksWarning('Spring Avenue');

avalancheWarning('122nd Avenue');

