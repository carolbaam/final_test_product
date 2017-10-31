
var isValidCard= function(array){
    
  var evenPosition=[];
  var creditCardNum=prompt('Ingrese número de tarjeta');
  
  var isValidCard=function (creditCardNum) {
  
  while(creditCardNum==="" || isNaN(parseInt(creditCardNum))) {
    
    creditCardNum=prompt('Ingresa números de tu tarjeta');
    
  }
  //convirtiendo a array y volteando
  var toArrayReverseNum=creditCardNum.split("").reverse();
  console.log(toArrayReverseNum);
  
  
  for (var i=0; i<toArrayReverseNum.length; i++){
      var evenOperation=[];
      var sum=[];
      if((i+1)%2===0){
        evenOperation=toArrayReverseNum[i]*2;
        toArrayReverseNum[i]=evenOperation
      if (evenOperation>=10){
      evenOperation=parseInt((evenOperation/10)+(evenOperation%10));
        toArrayReverseNum[i]=evenOperation;
        
      }
      
    }
       else{
         toArrayReverseNum[i]=parseInt(toArrayReverseNum[i]);
       }
       sum=sum + parseInt(toArrayReverseNum[i]);
    
  }
  
  
  var moduloOp = sum%10;
  if (moduloOp===0){
    return "Tarjeta válida";
  }
  else{
   return "Tarjeta inválida ";
  }
  }
  console.log(isValidCard(creditCardNum));
  
  
  
  