/*
Calculadora de multiplos
*/

let numeroFinal = Number(prompt("Ingrese el numero al que desea llegar"))
let multiplo = Number(prompt("Ingrese que multiplo desea mostrar"))

if(numeroFinal | multiplo == Number){
  for(i=0; i<=numeroFinal; i++){
    if(i%multiplo===0){
    document.write(i + `<br>`)
    }}
} else {
  alert("Datos ingresados invalidos")
}