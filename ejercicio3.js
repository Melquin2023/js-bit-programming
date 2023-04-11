function pa_o_impar(numero) {
    if (numero != null || numero != undefined) {
        if (Number.isInteger(numero)) {
            if (numero === 0) alert(`el numero: ${numero} es un numero sin paridad`)
            if (numero % 2 === 0 && numero != 0) alert(`el numero: ${numero} es par`)
            if (numero % 2 != 0) alert(`el numero: ${numero} es impar`)
        } else alert("el valor introducido no es un numero")
    } else alert("La variable que se intenta evaluar no existe")
}

function num_es_primo(numero) {
    if (numero != null || numero != undefined) {
        if (Number.isInteger(numero)) {
            let divisores = 0
            for (let j = numero; j >= 0; j--) {
                if (numero % j === 0) divisores++
            }
            if (divisores <= 2) {
                alert(`El numero ${numero} es primo`);
            }
            if (divisores > 2) {
                alert(`El numero ${numero} no es primo`);
            }
        } else alert("el valor introducido no es un numero")
    } else alert("La variable que se intenta evaluar no existe")
}

function siguiente_primo(numero) {
    if (numero != null || numero != undefined) {
        if (Number.isInteger(numero)) {
            while (true) {
                if (numero <= 0) numero = 1
                numero += 1
                let divisores = 0
                for (let j = numero; j >= 0; j--) {
                    if (numero % j === 0) divisores++
                }
                if (divisores <= 2) {
                    alert(`El siguiente numero primo es ${numero}`);
                    break;
                }
            }
        } else alert("el valor introducido no es un numero")
    } else alert("La variable que se intenta evaluar no existe")
}

function cuadrado(lado) {
    if (lado != null || lado != undefined) {
        if (Number.isInteger(lado)) {
            let cuadrado = ""
            for (let i = 0; i < lado; i++) {
                let linea = ""
                for (let j = 0; j < lado; j++) {
                    linea += "*    "
                }
                cuadrado += (linea + "\n")
            }
            alert(`${cuadrado}`)
        } else alert("el valor introducido no es un numero")
    } else alert("La variable que se intenta evaluar no existe")
}

function seleccion() {
    while (true) {
        var valorIngresado = parseInt(prompt("Bienvenido\npor favor escoja alguna de la siguiente funciones\n1. Al ingresar un numero se le indicara si este es par o impar\n2. Al ingresar un numero se le indicara si este es priomo o no\n3. Al ingresar un numero se le indicara el siguiente numero primo\n4. Al ingresar un numero se imprimira un cuadrado de lado equivalente al mismo\n5. Salir"))
        if (valorIngresado != null || valorIngresado != undefined) {
            if (Number.isInteger(valorIngresado)) {
                if (valorIngresado == 1) {
                    console.log("1")
                    par_o_impar(parseInt(prompt("Ingrese un numero:")))
                    break;
                }
                if (valorIngresado == 2) {
                    num_es_primo(parseInt(prompt("Ingrese un numero:")))
                    break;
                }
                if (valorIngresado == 3) {
                    siguiente_primo(parseInt(prompt("Ingrese un numero:")))
                    break;
                }
                if (valorIngresado == 4) {
                    cuadrado(parseInt(prompt("Ingrese un numero:")))
                    break;
                }
                if (valorIngresado == 5) break;
                if (valorIngresado < 1 || valorIngresado > 5) {
                    alert("Ingrese un valor valido")
                }
            } else alert("el valor introducido no es un numero")
        } else alert("La variable que se intenta evaluar no existe")
    }

}