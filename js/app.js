function useroption(num){ // creacion del menú principal
if(num==="1"){
  function cipher(){

        do{
            var string= prompt("Ingrese texto")
          }
        while (!string || !/^[a-zA-Z\s]*$/.test(string) ); // valida que solo ingrese  texto y espacios entre texto


        var codeCipher =""; // creacion de variable que alojara el resultado final


        for(i=0;i<string.length;i++){
          var numberCodeAscii = string.charCodeAt(i); // obtenemos el código ASCII
              if(numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)
                  var valueCapitalLetter = (numberCodeAscii-65 +33)%26 + 65; // Obtener el nuevo código ASCII mediante fórmula
                  var capitalLetter= String.fromCharCode(valueCapitalLetter); // convierte el nuevo ASCII en una letra del alfabeto
                  codeCipher+=capitalLetter; // concatenamos para formar la palabra

                }


              else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // condición código ASCII (Valores minúsculas)
                  var valueLetterLower = (numberCodeAscii-97 +33)%26 +97; //Obtener el nuevo código ASCII mediante fórmula
                  var letterLower = String.fromCharCode(valueLetterLower); //convertir el nuevo ASCII en letra del alfabeto
                  codeCipher+=letterLower; // concatenar para formar la nueva palabra

                }
              else if(numberCodeAscii==32){  // si el caracter es un espacio vacio
                    var space = " "; // se devuelve el mismo valor
                    codeCipher+=space;
                }

            }
        return alert("Texto original: " + string + "    Texto codificado : " + codeCipher );

      }

  cipher(); // llama a la función

}
/*****************************DECIFRADO DE CESAR**********************************/
else if (num === "2"){

    function decipher(){
      do{
          var string= prompt("Ingrese texto")
        }
      while (!string  || !/^[a-zA-Z\s]*$/.test(string)); // valida que solo ingrese  texto y espacio entre texto

      var codeDecipher ="";


        for(i=0;i<string.length;i++){

        var numberCodeAscii = string.charCodeAt(i); // obtenemos el código ASCII

        if(numberCodeAscii>=65 && numberCodeAscii<=90){ // validando para letras mayúsculas
            var valueCapitalLetter = (numberCodeAscii+65-33)%26+65 ; // código Ascii de la nueva letra
            var capitalLetter= String.fromCharCode(valueCapitalLetter); // convierte el nuevo ASCII en una letra del alafabeto
            codeDecipher+=capitalLetter; // concatenamos

        }
       else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // validando para letras minusculas
            var valueLetterLower =  (numberCodeAscii+97-45)%26+97 ; // código ASCII de la nueva letra
            var letterLower = String.fromCharCode(valueLetterLower); //convierte el nuevo ASCII en una letra del alfabeto
            codeDecipher+=letterLower; // concatenamos la nueva palabra

        }
       else if(numberCodeAscii==32){ // si el caracter es un espacio vacio
              var space = " ";
              codeDecipher+=space; // concatenamos el mismo valor
          }
      }
    return alert("Texto codificado :" + string  + "\n  Texto original :" + codeDecipher ); // muestra la palabra decodificada
// muestra mensaje en la página web Index
  }

decipher(); // llama a la función

}

}


// Creación de menú dentro de un prompt que permita el acceso a las dos funciones
do {var num = prompt("Ingrese opción \n 1. Codificar en Cesar \n 2. Decodificar en Cesar \n 3.SALIR" );
   useroption(num);
} while (num !== '3');
