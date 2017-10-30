var text=prompt('ingresa tu frase');
var toUpperText= text.toUpperCase();
console.log(toUpperText);

//if(toUpperCase/^d/.test || toUpperCase /^s/.test ){
/*
while(toUpperText ==='' || toUpperText!==='String' ){
  text=prompt('ingresa tu frase');
}

console.log()
*/
var cipher= function(toUpperText){
  var cipherText="";
  for (var i=0; i<toUpperText.length; i++){
    
    var textChar=(toUpperText.charCodeAt(i)-65+33) %26 +65;
    cipherText+= String.fromCharCode(textChar);
 
  }
  
  return cipherText;
  
}

console.log(cipher(toUpperText));

var decipher= function(toUpperText){
  var decipherText="";
  for (var i=0; i<toUpperText.length; i++){
    
    var textChar=(toUpperText.charCodeAt(i)+26)%26+65;
    
    decipherText+= String.fromCharCode(textChar);
 
  }

  
  return decipherText;
  
}
console.log(decipher(toUpperText));


//-65-33)%26+65;





