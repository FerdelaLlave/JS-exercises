//1
let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
    console.log("Usted puede conducir")
 
} else if (edad<18){
    
    let anosFaltantes= 18 - edad;

    console.log("No tiene edad para conducir tiene que esperar "+anosFaltantes+" años");
  
 }

//2
 let myAge = parseInt(prompt("Mi edad es"));
 let yourAge = parseInt(prompt("Ingrese su edad"));

 if (myAge > yourAge){

    diferenciaEdad= myAge-yourAge;

    console.log("Eres "+diferenciaEdad+" años menor que yo");

 } else if(myAge<yourAge){

    diferenciaEdad2= yourAge-myAge;

    console.log("Eres "+diferenciaEdad2+" años mayor que yo");
 }

 //3

 let a = 10;

 let b = 15;

 if (a<b){

    console.log("A es menor que B");
 
}else if(a>b){

    console.log("A es mayor que B");
}

//4

let mesActual = (prompt("Ingrese un mes del año"));

let mes = mesActual.toLowerCase();

switch(mes){
    case "septiembre": 
    case "octubre": 
    case "noviembre":
        console.log("La temporada es Otoño")
        break;
    
    case "diciembre": 
    case "enero": 
    case "febrero":
        console.log("La temporada es Invierno")
        break;
    
    case "marzo": 
    case "abril": 
    case "mayo":
        console.log("La temporada es Primavera")
        break;

    case "junio":
    case "julio": 
    case "agosto":
        console.log("La temporada es Verano")
        break;
    
    default:
        console.log("No es un mes del año, o revise su escritura")

}

//5

let puntaje = parseInt(prompt("Ingrese el puntaje del estudiante:"));

if (puntaje >= 80 && puntaje <= 100) {
    console.log("La calificación: A");
} else if (puntaje >= 70 && puntaje <= 89) {
    console.log("La calificación: B");
} else if (puntaje >= 60 && puntaje <= 69) {
    console.log("La calificación: C");
} else if (puntaje >= 50 && puntaje <= 59) {
    console.log("La calificación: D");
} else if (puntaje >= 0 && puntaje <= 49) {
    console.log("La calificación: F");
} 





