/*var arrayNum=[1,2,3,4,5];

var reverseArray=arrayNum.reverse();

console.log(reverseArray);


var creditCardNum=(prompt('ingresa tu número de tarjeta'));

var cardArray= [];

for (var i=0; i<creditCardNum.length; i++){
  
 cardArray.push(creditCardNum[i]);
 var reverseCard=cardArray.reverse();
}

console.log(reverseCard);
*/


var isValidCard= function(array){
    
  var evenPosition=[];
  var evenPositionMult=[];
  
   for (var i=0; i<array.length; i++){
    
       if ((array).indexOf(i) %2 ===0){
          evenPosition.push(array[i]);
   }
    
   }
   
    return evenPosition;
  
    
  }
  
  console.log(isValidCard([2,3,4,5,4,5,6,7]));
  