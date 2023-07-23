//Vamos a realizar un programa
//que pida al usuario del navegador
//dos datos, los concatene y los devuelva
//vamos a usar metodos del objeto Window (ventana del navegador)
//prompt() y alert()

//el metodo prompt guarda en un string la respuesta de un usuario
//prompt devuelve
//let firstName = prompt("Cual es tu nombre?");
//let lastName = prompt("tu apellido?");
//console.log muestra la informacion en consola
//console.log(firstName + ' ' + lastName)
//alert(firstName+ ' ' + lastName)
//El metodo alert manda una alerta  al navegador con el texto que elijamos

// Ejercicio
 // let firstName = prompt("Primer nombre");
  //let secondName = prompt("Apellido");
  //console.log(firstName+' '+ secondName);

  //Concatenar texto con ${} template string literals
  //const age= prompt(`Hola, ${firstName},${secondName}, Bienvenido, cual es tu edad?`);
  //const result =alert(`${firstName} ${secondName} tiene ${age} años de edad y el año proximo tendras ${parseInt(age)+1}`)
  //NaN= not a number
  //aparece cuando intentamos operar aritmeticamente con alguna variable que no es numerica

  // un programa portero de bar

  //const ageOfPerson = prompt(`Bienvenido buenos noches, decime tu edad`)
 // const ageOfPerson=parseInt(ageOfPerson)
  //condicionales
  //son la maner de modificar el flujo de ejecucion de nuestro programa
//if (ageOfPerson >18){
  // alert(`podes entrar`);
//}else if(ageOfPerson === 18){
  //  alert(`justito`)
//}

//else{
//    alert(`no puedes pasar`)
//}

//Switch es una estructura condicional en la que analizamos posibles 
//casos de una variable

//sintaxis swicth

let fruta= `kiwi`
switch(fruta){
    case `manzana`:
        console.log(`La manzana es roja`);
        //es importante usar la orden `break` 
        //para terminar la ejecucion del switch al momento
        //de cumplir un caso
        break;
    case `banana`:
        console.log(`La banana es amarilla`);
        break;
    case `sandia`:
        console.log(`La sandia es verde`)
        break;
        
        default:
            console.log(`no conozco esa fruta`)
            break;
}

//segundo ejercicio
let color = prompt(`Ingrese un color primario`)
    switch(color){
        case `rojo`:
        console.log(`este es el color rojo`);
        break;
    
        case`amarillo`:
        console.log(`Este es el color amarillo`);
        break;

        case `verde`:
            console.log(`Este es el color verde`)
break;

default:
   console.log(`Este no es un color primario`)

    }