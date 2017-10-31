
//crear prompt para introducir la frase
var text=prompt('ingresa tu frase');
//variable para convertir minúsculas a mayusculas
var toUpperText= text.toUpperCase();
console.log(toUpperText);

//validar casos si es número o si hay string vacío regresar prompt
while (isNaN(parseInt(toUpperText))==false ){
  toUpperText=prompt('ingresa tu frase');
}


console.log()
*/
//crear función para cifrar, (recorrer string, convertir a ascii,aplicar fórmula, regresar a ascii, devolver letra en vez de número)
var cipher= function(toUpperText){
  var cipherText="";
  for (var i=0; i<toUpperText.length; i++){
    
    var textChar=(toUpperText.charCodeAt(i)-65+33) %26 +65;
    cipherText+= String.fromCharCode(textChar);
 
  }
  
  return cipherText;
  
}

console.log(cipher(toUpperText));

// crear variable para descifrar( lo mismo solo que en la operación hay algo raro y encontré que solo sumando 26 daba el resultado)
var decipher= function(toUpperText){
  var decipherText="";
  for (var i=0; i<toUpperText.length; i++){
    
    var textChar=(toUpperText.charCodeAt(i)+26)%26+65; //aqui
    
    decipherText+= String.fromCharCode(textChar);
 
  }

  
  return decipherText;
  
}
console.log(decipher(toUpperText));


//  la formula salía raro para descifrar así que en vez de esto(-65-33)%26+65;) solo quedó + 26.





