var text=prompt('ingresa tu frase');
var toUpperText= text.toUpperCase();

//if(toUpperCase/^d/.test || toUpperCase /^s/.test ){

for (var i =0; var i<toUpperText.length; i++) {
  if ((i)==="" || (i)===Number) {
    alert('no debes dejar espacios ni ingresar numeros');
  }else{
    return true
  }
}




var cipher= function(toUpperText){
  var cipherText="";
  for (var i=0; i<toUpperText.length; i++){
    
    var textChar=(toUpperText.charCodeAt(i)-65+33) %26 +65;
    cipherText+= String.fromCharCode(textChar);
 
  }
  
  return cipherText;
  
}
