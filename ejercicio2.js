function apostoles(params) {
      
     
    const apostoles = ["Juan", "Pedro", "Mateo", "Lucas", "Felipe", "Andres", "Santiago", "Samuel", "Tomas", "Judas", "Bartolome", "Simon"];
let numero = prompt("Ingresa un número del 0 al 11:");
let nombre;

if(numero >= 0 && numero <= 11) {
 nombre = apostoles[numero];
} else {
 nombre = "Número desconocido";
}

console.log("El apostol " + numero + " se llama " + nombre);
    
    }