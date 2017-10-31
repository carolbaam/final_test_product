

   //creando prompt que pide número de tarjeta
   var creditCardNum=prompt('Ingrese número de tarjeta');
  
     var isValidCard=function (creditCardNum) {
  //filtro con while para evitar que pase un campo vacío y un elemento no numérico, si no se cumple, tevolver prompt
         while(creditCardNum==="" || isNaN(parseInt(creditCardNum))) {
    
         creditCardNum=prompt('Ingresa números de tu tarjeta');
    
         }
  //convirtiendo a array y volteando
    var toArrayReverseNum=creditCardNum.split("").reverse();
    console.log(toArrayReverseNum);
  
  //iternado sobre array para encontrar indice par, y si es par y mayor a 10 sumar resultado de división y modulo de 10
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
      
              }   else {
         toArrayReverseNum[i]=parseInt(toArrayReverseNum[i]);
             }//sumar elementos en indices y no índices 
                 sum=sum + parseInt(toArrayReverseNum[i]);
    
             }
  
  //realizar operación modulo10 a la suma total para saber si es valida o no
         var moduloOp = sum%10;
              if (moduloOp===0){
                 return "Tarjeta válida";
              } else {
                  return "Tarjeta inválida ";
             }
             }
          
             console.log(isValidCard(creditCardNum));
  
  
  
  