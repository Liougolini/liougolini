//Primer Ejercicio:
/*
Desarroolla un programa que solicite al usuario
su nombre y su edad.
una vez ingresada su edad, el programa debe 
mostrar en un mensaje
-saludo al usuario
-edad actual
-año de nacimiento
*/

let name=prompt(`Digite su nombre`);
let age=prompt(`Ahora su edad actual`);
let date=`2023`;

alert(`Hola bienvenido ${name} usted tiene ${age} años de edad y naciste el año ${parseInt(date)-(age)} `)



//Ejercicio numero 3
/*
Desarrolla un programa verdulero que reciba una de las siguientes frutas, y devuelva su precio:
Manzanas - $375.00 por kg
Platanos - $125.00 por kg
Naranjas - $200.00 por kg
Espinacas - $300.00 por kg
Uvas - $500.00 por kg
tomates - $250.00 por kg
Pepinos- $100.00por kg
Pomelos - $210.00 por kilo
*/

let fruta = prompt("Indique el nombre de la fruta");


switch (fruta.toLowerCase()) {
    case `manzana`:
        console.log(`El kilo de mazanas esta $375`);
        break;

    case `platano`:
        console.log("El kilo de platanos esta $125")
        break;

    case `naranja`:
        console.log("El kilo de naranja esta $200")
        break;
    case `espinaca`:
        console.log("El kilo de espinaca esta $375")
        break;
    case `uva`:
        console.log("El kilo de uvas esta $500")
        break; espinacas
    case `tomate`:
        console.log("El kilo de tomates esta $250")
        break;
    case `pepino`:
        console.log("El kilo de pepino esta $100")
        break;
    case `pomelo`:
        console.log("El kilo de pomelo esta $210")
        break;

    default:
        console.log("No tenemos esa fruta")
        break;
}


//Ejercicio nuemro 2
/** 
 * Desarrolla un programa que pida un numero del 1 al 100
 * y diga si el numero es PAR o IMPAr.
 * Si el numero ingresado esta por fuera / no es valido
 * debera salir un mensaje de error
 * 
*/

let numero = prompt("Indique un numero del 1 al 100");

if (numero >= 1 && numero <= 100) {
    if (numero % 2 === 0) {
        console.log("es Par")
    } else {
        console.log("es impar")
    }
} else {
    console.log("es incorrecto")
    
}