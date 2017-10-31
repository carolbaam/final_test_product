## 
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números
#### Pseudocódigo


1.-Pedir por medio de un prompt una frase al usuario
2.-crear una variable que permita convertir todos los caracteres a mayúsculas
3.-crear una filtro que evite que el usuario intriduzca espacios vacíos o números por medio de un for y condicionales
4.-Crear función cipher que a traves de un for, itere y luego a cada caracter le aplique la formula
(x+n)%26, 
4.1 primero convertir el caracter deseado a codigo ascii a traves de charCodeAt
luego restarle 65 para volver a estar en índice 0 y poder sumarle 33 y sacar el módulo
4.2sumar de nuevo 65 para volver a estar en código ascii 
4.3 volver a pasar eso resultante por String.charCode para que ahora nus devuelva letras en lugar de números.
5..- hacer lo mismo para descifrar

! [diagrama de flujo]http://subefotos.com/ver/?dab032b6f87825d038b39e2a62f33008o.png