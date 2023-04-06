

// function nombre_de_la_funcion(Parametro){

// }

// Funcinoes en variables

// let nombre_de_la_funcion = (){


// }

// const  nombre_de_la_funcion=(){

// }
//LLamara una funcion

// x()

// function suma(a,b){
//     console.log(a+b)
// }
// suma(2,3)

 function siguientePrimo() {
     let numUsuario = parseInt(prompt("Por favor escriba un numero"))
     let divisores = 0
     for (let i = numUsuario; i > 0; i--) {
         if (numUsuario % i === 0) divisores++
     }
     if (divisores > 2) console.log("el numero ingresado no es primo")
     let bandera = true
     let sigPrimo = numUsuario
     while (bandera){
         divisores = 0
         sigPrimo += 1
         for (let i = sigPrimo; i > 0; i--) {
             if (sigPrimo % i === 0) divisores++
         }
         if (divisores === 2){ 
             console.log(`el siguiente numero primo despues de ${numUsuario} es: ${sigPrimo}`)
             bandera = false
         }
     }
 }

// function numpar_e_impar(){
//     for (i=0; i<10; i++){
//         if(i % 2 === 0 )
//         console.log ("los numeros pares son" + i)
        
//         }
//     }
//     else {
//         console.log("los numero son impares")
// }