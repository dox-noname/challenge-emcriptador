
// variables de botones
var btnEncriptar = document.getElementById("boton__encriptar");
var btnDesencriptar = document.getElementById("boton__desencriptar");
var btncopiar = document.getElementById("btn_copiar");
var resultado = document.getElementById("area-2");
var entrada = document.getElementById("area-1");


// esta funcion encripta el texto
function encriptar() {
  mostrarOcultar(); // llamo a la funcion de que ocultara la imagen 

  // variables de los text area
  var texto = document.getElementById("area-1").value; 
  var msjEncriptado = "";
  var mensaje = document.getElementById("area-1").value;
  var mayus = /[A-Z]/g; // array de mayusculas
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g; // arraay de caracteres

  if(mensaje == ""){ // condicion para que el text area no este vaciio
    alert("no debe estar vacio");
  
  }else if (mensaje.match(mayus) != mensaje.match(mayus)){ // condicion para que no ingrese mayusculas
      alert("No puede contener mayusculas");
  }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
      alert("no puede contener acentos ni caracteres especiales"); // condicion para que no ingrese caracteres
  }else{

    // creo un variable que tendra el valor de text area-1
    //usamps replace para que nos ponga ober imes et
  var textoEncriptado = texto.replace(/e/igm, "enter");
  var textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
  var textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
  var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");


// añadimos el texto encriptado a el text-area-2
  document.getElementById("area-2").innerHTML = textoEncriptado;
 }
}


function desencriptar() {
    var texto = document.getElementById("area-1").value.toLowerCase();

    // cambiamos los valores de asignacion
  var textoEncriptado = texto.replace(/enter/igm, "e");
  var textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
  var textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
  var textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");

  document.getElementById("area-2").innerHTML = textoEncriptado;
  
}

function Copiar(){
var textoCopiado = document.getElementById("area-2"); // variable que tendra el valor de area-2
textoCopiado.select();
document.execCommand("copy"); // copiamos

}

// esta funcion oculta la imagen principal y muestra el text area 2 
 function mostrarOcultar(){
document.getElementById("textencript").style.display = "block";
  document.getElementById("img__container").style.display = "none";
  



 }

// lamamos a las funciones
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;










