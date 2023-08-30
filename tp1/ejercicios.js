// // EJERCICIO 1
// const edad = 21
// console.log(`edad: ${edad} años`)

// // EJERCICIO 2
// const num1 = 8
// const num2 = 2

// let suma = num1 + num2
// let resta = num1 - num2
// let multip = num1 * num2
// let div = num1 / num2

// console.log(`suma: ${suma}`)
// console.log(`resta: ${resta}`)
// console.log(`multiplicacion: ${multip}`)
// console.log(`division: ${div}`)

// EJERCICIO 3 - 4

// let sexo = prompt("ingrese su sexo (m - f): ")
// let edad = prompt("ingrese su edad: ")
// edad = parseInt(edad)


// if (sexo === "m"){
//     if (edad >= 65){
//         console.log("usted es jubilado")
//     } else {
//         console.log("usted no es jubilado")
//     }
// } else if (sexo === "f"){
//     if (edad >= 60){
//         console.log("usted es jubilada")
//     } else {
//         console.log("usted no es jubilada")
//     }
// }



// console.log(`edad: ${edad}`)
// console.log(`sexo: ${sexo}`)


// EJERCICIO 5 a

// for (let cuenta = 1; cuenta <= 10; cuenta++){
//     let edad = prompt("ingrese su edad: ")
//     edad = parseInt(edad)

//     if (edad >= 18){
//         console.log("usted es mayor de edad")
//     } else {
//         console.log("usted es menor de edad")
//     }
// }


//  EJERCICIO DE FUNCIONES DE BOTONES

// function cambiarColor(color) {
//     document.bgColor = color
// }

// EJERCICIO DE MATRICES

// let nombres = ["nacho", "arek", "laura", "sonia", "gonzalo", "eva", "pedro"]
// document.write(nombres[0] + "<br>")
// document.write(nombres[1] + "<br>")
// document.write(nombres[2] + "<br>")
// document.write(nombres[3] + "<br>")
// document.write(nombres[4] + "<br>")
// document.write(nombres[5] + "<br>")
// document.write(nombres[6] + "<br>")

// const nombreIngresado = prompt("Ingrese un nombre: ")

// const verificacionNombre = (nombre) => {
//     if (nombres.includes(nombre)){
//         alert("nombre existe en la lista")
//     } else {
//         alert("nombre no existe en la lista")
//     }
// }

// verificacionNombre(nombreIngresado)


// EJERCICIO DATOS DE UNA FECHA

const fecha = new Date()

document.write("año: " + fecha.getFullYear() + "<br>" )
document.write("mes: " + fecha.getMonth() + "<br>")
document.write("dia: " + fecha.getDate() + "<br>")
document.write("hora: " + fecha.getHours() + "<br>")
document.write("minutos: " + fecha.getMinutes() + "<br>")
document.write("segundos: " + fecha.getSeconds() + "<br>")
document.write("milisegundos: " + fecha.getMilliseconds() + "<br>")
document.write("time: " + fecha.getTime() + "<br>")






