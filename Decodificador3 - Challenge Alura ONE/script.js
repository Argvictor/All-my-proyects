


function ocultarBuscador() {

  document.getElementById("buscador").style.display = "none";
  document.getElementById("salida").style.display = "inline-block";
  document.getElementById("copiar").style.display = "inline-block";
  document.getElementById("ingreso").value = "";

}



function copiar() {

  var textoCopiado = document.getElementById("salida");

  textoCopiado.select();
  document.execCommand("copy");
  
}


function encriptar() {

var texto = document.getElementById("ingreso").value;
var contador = 0;
var codigos = ["ai", "enter", "imes", "ober", "ufat"];
var nuevoTexto = "";

while (contador < texto.length) {

if(texto.charAt (contador) == "a") {
nuevoTexto = nuevoTexto + codigos [0];
} else if(texto.charAt (contador) == "e") {
    nuevoTexto = nuevoTexto + codigos [1];
    } else if(texto.charAt (contador) == "i") {
	nuevoTexto = nuevoTexto + codigos [2];
	} else if(texto.charAt (contador) == "o") {
	    nuevoTexto = nuevoTexto + codigos [3];
	    } else if(texto.charAt (contador) == "u") {
		nuevoTexto = nuevoTexto + codigos [4];
		} else {
		    nuevoTexto = nuevoTexto + texto.charAt(contador);
		    }
contador++;
}
ocultarBuscador();
return nuevoTexto

}




function desencriptar() {

var texto = document.getElementById("ingreso").value;
var contador = 0;
var vocales = ["a", "e", "i", "o", "u"];
var nuevoTexto = "";


while (contador < texto.length) {

if(texto.charAt (contador) == "a") {
nuevoTexto = nuevoTexto + vocales [0];
contador = contador + 1;
} else if(texto.charAt (contador) == "e") {
    nuevoTexto = nuevoTexto + vocales [1];
    contador = contador + 4;
    } else if(texto.charAt (contador) == "i") {
	nuevoTexto = nuevoTexto + vocales [2];
	contador = contador + 3;
	} else if(texto.charAt (contador) == "o") {
	    nuevoTexto = nuevoTexto + vocales [3];
	    contador = contador + 3;
	    } else if(texto.charAt (contador) == "u") {
		nuevoTexto = nuevoTexto + vocales [4];
		contador = contador + 3;
		} else {
		    nuevoTexto = nuevoTexto + texto.charAt(contador);
		    }
contador++;
}
ocultarBuscador();
return nuevoTexto;

}



