console.log("mensaje");
alert("hola");
console.info("mensaje");
console.error("Error mensaje");
console.warn("Error....")
/**comentario en parrafo
 * multiples
 */
//Solo una linea

//declaracion de variables en js
/**1- let
 * 2-var
 * 3-const :una variable es una contante que no cambia su valor, siempre y cuando no sea un objeto. 
 */
const pi=3.1416 //valor fijo

const ob={
    atributo:"valor";
}

//let ejemplo bucle
for(let i=0; i<10;i++){
    x=i+1
}

var x=3;
//aceder al dom
const hparrafo=document.getElementById(parrafo) 
hparrafo.style.color="red"
console.log(hparrafo)//nos permite acceder a cualquier parte del documento
//document.getElementById busca un elemento de html mediante su ID
//addEventlistener nos permite agregar eventos (click, dobleclick, key, keyup)
hparrafo.addEventListener("click", function(){
    hparrafo.style.color="orange"
})