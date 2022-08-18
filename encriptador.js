

var btnEncriptar = document.getElementById("boton__encriptar");
var btnDesencriptar = document.getElementById("boton__desencriptar");
var btncopiar = document.getElementById("btn_copiar");
var resultado = document.getElementById("area-2");
var entrada = document.getElementById("area-1");

function encriptar() {
  mostrarOcultar();


  var texto = document.getElementById("area-1").value;
  var msjEncriptado = "";
  var mensaje = document.getElementById("area-1").value;
  var mayus = /[A-Z]/g;
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if(mensaje == ""){
    alert("no debe estar vacio");
  
  }else if (mensaje.match(mayus) != mensaje.match(mayus)){
      alert("No puede contener mayusculas");
  }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
      alert("no puede contener acentos ni caracteres especiales");
  }else{

  var textoEncriptado = texto.replace(/e/igm, "enter");
  var textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
  var textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
  var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

  document.getElementById("area-2").innerHTML = textoEncriptado;
 }
}

function desencriptar() {
    var texto = document.getElementById("area-1").value.toLowerCase();

  var textoEncriptado = texto.replace(/enter/igm, "e");
  var textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
  var textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
  var textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");

  document.getElementById("area-2").innerHTML = textoEncriptado;
  
}

function Copiar(){
var textoCopiado = document.getElementById("area-2");
textoCopiado.select();
document.execCommand("copy");

}


 function mostrarOcultar(){
document.getElementById("textencript").style.display = "block";
  document.getElementById("img__container").style.display = "none";
  



 }


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;










//pruebas fallidas
  
  /*function mostrarTexto() {
    mostrarOcultar();
     resultado = encriptarTexto(recuperarTexto())

  }

  function recuperarTexto() {
     var area = document.getElementById("area-1");
    return area.value
  }

function encriptarTexto(mensaje){
  var texto = mensaje;
  var textoFinal = "";
  for (var i = 0 ; i < texto.length; i++){
    if(texto[i] == "a"){
      textoFinal == textoFinal + "ai"
    }
    else if(texto[i] == "e"){
      textoFinal == textoFinal + "enter"
    }
    else if(texto[i] == "i"){
      textoFinal == textoFinal + "imes"
    }
    else if(texto[i] == "o"){
      textoFinal == textoFinal + "ober"
    }
     else if(texto[i] == "u"){
      textoFinal == textoFinal + "ufat"
    }
    else{
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}



 btnEncriptar.onclick = mostrarTexto;


 function mostrarOcultar(){

  document.getElementById("img__container").style.display = "none";
  document.getElementById("textencript").style.display = "block";



 }*/


