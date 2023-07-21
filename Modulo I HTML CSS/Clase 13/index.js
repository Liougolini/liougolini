var lionel="ugolini";
console.log(lionel);
lionel=18;
console.log(lionel);
var miNombre="camila";
console.log(miNombre);
var a;
var b=10;

console.log(b);
a=20;
console.log(a);

var miApellido="tomassi";
console.log(miApellido);
var f;
var j=22;
console.log(j);
f=15;
console.log(f);

//Le asisgnamos el valor de una variable a otra variable

var a=5;
var b=a;

console.log(a);
console.log(b);

//inicializar una variable

var x=9;
//variables no inicializadas
var b;

//Operadores de aritmetica
//SUMA
var suma = 7+10;
console.log(suma);

//RESTA
 var resta=4 - 3;
 console.log(resta);

 //multiplicacion
 var producto= 5 * 10;
 console.log(producto);
 //division
  var cociente= 20/2;
  console.log(cociente);
  cociente= 3/0;
  console.log(cociente); //infinity

  //resto de una division

  var resto=15 % 5;
  console.log(resto); //resultado es 0 (cero)

  var restoDos= 5 % 2;
  console.log(restoDos); //el resultado es 1 (uno)
  var restoTres= 5 % 3;
  console.log(restoTres);

  //Incrementar variables

  var librosComprados=105;
  console.log(librosComprados);
  librosComprados ++;
  console.log(librosComprados);

  //asignacion de suma

  var z= 25;
  z+=5;
  console.log(z);

  //Secuencias de escapes
  /*var texto= "I'm "english"" //esto da error de sintaxis

  console.log(texto);*/

  var texto="i\'m \"english\"";
  console.log(texto)

  //Concatenar espacio de caracteres

  var nombreCompleto = "Alan " + "Turing";
  console.log(nombreCompleto);

  var verbo="programar";
  var mensaje="estoy aprendiendo a " + verbo;
  console.log(mensaje);
  
  var mensajeCompleto="estoy aprendiendo a programar ";
  var mensajeFinal="con Mardel Plata programa";
  console.log(mensajeCompleto);
  mensajeCompleto+=mensajeFinal;
  console.log(mensajeCompleto);

  //longitudes de cadena de caracteres

  var miCadena;
  miCadena="A";
  console.log(miCadena.length);

  var otraCadena;
  otraCadena="tiene mas caracteres";
  console.log(otraCadena.length);

  var cadenaDeCaracteres="hola soy pepito";

  console.log(cadenaDeCaracteres.length);

  //Notacion de corchetes
  var corchete= "javascript";
  console.log(corchete[2]);
  console.log(corchete[5]);


  var ultimaLetra="javascript";
  console.log(ultimaLetra[ultimaLetra.length-1]);
  var ultima="papanata";
  console.log(ultima[ultima.length-1]);
  
     //Practicas js
  //let firstName=prompt(`Hola, cual es tu primer nombre?`);
    //let lastName=prompt(`y tu apellido?`)
    //const age=prompt(`Que edad tienes?`)
    
    

    //alert(`Hola ${firstName} ${lastName} tu edad es de ${age} y el año que viene tendras ${parseInt(age)+1} `)

    //practica Bar
    
    

    const agePerson = prompt(`Bienvenidos, que edad tienes?`);
    
    if (agePerson > 18){
        alert(`Perfecto, Puedes pasar`);
    }else if (agePerson == 18){
        alert(`Entras justito`);
    }else 
    alert(`no podes pasar`)
   
    