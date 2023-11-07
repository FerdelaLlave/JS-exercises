//1
let firstName = "Maria";
let lastName = "Nunez";
let country = "Mexico";
let age = 38;
let isMarried = false;
let year = 2023;

console.log(typeof "Maria");

console.log(typeof "Nunez");

console.log(typeof "mexico");

console.log(typeof 38);

console.log(typeof false);

console.log(typeof 2023);

//2
console.log (typeof "10" == typeof 10);

//3
console.log ( parseInt("9.98") == 10);

//4
let esBlanco = true;
let esAnimal = true;
let esPerro = true;

let esGato = false;
let esRojo = false;
let esPez = false;

//5

console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!="4");
console.log(4=="4");
console.log(4==="4");

//6

let fechaActual= new Date();

let anioActual = fechaActual.getFullYear();

let mesActual = fechaActual.getMonth();

let diaActual = fechaActual.getDate();

let diaSemana = fechaActual.getDay();

let horaActual = fechaActual.getHours();

let minutosActuales = fechaActual.getMinutes();

let fechaInicio = new Date(1970,0,1,0,0,0,0);

let diferenciaEnMilisegundos = fechaActual-fechaInicio;

let segundosTranscurridos = diferenciaEnMilisegundos/1000;

console.log("¿Qué año es hoy?: " + anioActual);
console.log("¿Qué mes es hoy con un número?: " + (mesActual + 1)); // Sumamos 1 porque los meses van de 0 a 11
console.log("¿Qué fecha es hoy?: " + diaActual);
console.log("¿Qué día es hoy con un número?: " + diaSemana);
console.log("¿Cuál es la hora actual?: " + horaActual);
console.log("¿Cuántos minutos hay actualmente?: " + minutosActuales);
console.log("Los segundos transcurridos desde el 1 de enero de 1970 hasta ahora: " + segundosTranscurridos);

//7

let base = parseFloat(prompt("Ingrese la base del triángulo:"));

let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

let area = 0.5 * base * altura;

console.log("El área del triángulo es: " + area);

//8

let ladoA = parseFloat(prompt("Ingrese el lado A del triangulo"));

let ladoB = parseFloat(prompt("Ingrese el lado B del triangulo"));

let ladoC = parseFloat(prompt("Ingrese el lado C del triangulo"));

let perimetro = ladoA+ladoB+ladoC;

console.log( "El perimetro del triangulo es:" + perimetro);








