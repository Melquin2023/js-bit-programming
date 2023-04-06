// console.log("hola mundo", 2+2,) /*imprimir una salida*/

// let nombre = "melquin"

/*String "cadena de texto"
Number 1234
bolean true o false
Array [true, false,"", {}] listas
{JSON} javascript obejt notation
null
undefined*/

/*Variables caja de esapcio de memoria*/

// let nombre ="Melquin"
// let apellidos ="Barrientos"
// const derVariable = 2*5
// console.log(nombre, apellidos, derVariable)

// condicionales

// = asignacion
// == comparacion del mismo dato "2"==2 =true
// === comparacion del mismo datos y el mismo tipo  "2"===2 = false

// let valor = 1

// if(valor >0){
//     console.log(valor + " ES positivo")
//     }
//     else if(valor ==0 )
//     {console.log(valor +" es neutro")}

//     else {
//     console.log(valor +" Es negativo")}
// let numero = 0;

// if((numero % 2) == 0){
//   console.log(numero + ' es par');
// }
// else{
//   console.log(numero + ' es impar');
// }

// let num =7

// if(num %3 == 0 && num %5 ===0) {
//   console.log("XD")}

// else if(num %3 == 0){
//   console.log("X")
// }
// else if(num %5 ===0){
//   console.log("D")
// }
// else{ console.log ("no es multiplo de ninguno")
// }

// for ( let i=0; i<=10; i++)
// console.log("5 x ", i , "=", i*5)

// for (let m=0; m<=24; m++)
//   {
//     if(m < 10) console.log (`0${m}:00`)
//       else console.log (`${m}:00`)
//       }

// let espacio = "";
// for (let i = 1; i <= 100; i++) {
//   if (i < 10) {
//     espacio = espacio + `0${i}, `;
//   } else if (i>=10 && i<100) {
//     espacio = espacio + `${i}, `
//   }
//   else {
//     espacio = espacio + `${i}`
//   }
// }

// console.log(espacio);

//  for(let i=0; i<=5; i++){
//    let squared =""

//    for(let j=0; j<=5; j++){
//      if (i ===0 || i===5 || j === 0 || j===5){
//        squared +="#"
//      } else {
//        squared +=" "
//      }

//    }
//    console.log(squared)
// // }


// for(let i=0; i<=4; i++){
//   let piramide ="";
//   for(let j=0; j<=i; j++){
//     piramide +="# ";
//   }
//   console.log(piramide)
  
// }



class Parqueadero {
  constructor(capacidad, precioHora) {
    this.capacidad = capacidad;
    this.espaciosDisponibles = capacidad;
    this.vehiculosEstacionados = [];
    this.precioHora = precioHora;
    this.tarifas = {};
  }

  ingresarVehiculo(vehiculo) {
    if (this.espaciosDisponibles > 0) {
      this.vehiculosEstacionados.push({ vehiculo, horaIngreso: new Date() });
      this.espaciosDisponibles--;
      console.log(`El vehículo ${vehiculo} ha ingresado al parqueadero.`);
    } else {
      console.log("El parqueadero está lleno.");
    }
  }

  sacarVehiculo(vehiculo) {
    const vehiculoEstacionado = this.vehiculosEstacionados.find(v => v.vehiculo === vehiculo);
    if (vehiculoEstacionado) {
      const horaIngreso = vehiculoEstacionado.horaIngreso;
      const horaSalida = new Date();
      const tiempoEstacionado = (horaSalida - horaIngreso) / (1000 * 60 * 60);
      const tarifa = this.calcularTarifa(tiempoEstacionado);
      this.vehiculosEstacionados = this.vehiculosEstacionados.filter(v => v.vehiculo !== vehiculo);
      this.espaciosDisponibles++;
      console.log(`El vehículo ${vehiculo} ha salido del parqueadero. Tarifa a pagar: $${tarifa}.`);
    } else {
      console.log(`El vehículo ${vehiculo} no se encuentra en el parqueadero.`);
    }
  }

  calcularTarifa(tiempoEstacionado) {
    const horasCompletas = Math.floor(tiempoEstacionado);
    const minutosAdicionales = Math.round((tiempoEstacionado - horasCompletas) * 60);
    const totalHoras = horasCompletas + (minutosAdicionales > 0 ? 1 : 0);
    const tarifa = totalHoras * this.precioHora;
    this.tarifas[`${totalHoras} hora(s)`] = tarifa;
    return tarifa;
  }

  imprimirTarifas() {
    console.log("Tarifas:");
    Object.entries(this.tarifas).forEach(([horas, tarifa]) => {
      console.log(`${horas}: $${tarifa}`);
    });
  }
}