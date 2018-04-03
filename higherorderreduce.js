'use strict';


function decoder(str) {
  let decodedArray =[];
  let codedArray = str.split(' ');
  for (let i =0; i <codedArray.length; i++) {
    if (codedArray[i].length === 3) {
      decodedArray.push(' ');
    }
    else {
       
      decodedArray.push((codedArray[i].charAt(codedArray[i].length-1)).toUpperCase()
      );
        

    }
    
  }
  return decodedArray.reduce(function sentencemaker(initialValue=' ', element) {
    return initialValue.concat(element);
  });
}


console.log(decoder('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));