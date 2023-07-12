// Verificar si un número es par o impar
let numero = parseInt(prompt("Ingrese un número para saber si es par o impar:"));

if (numero % 2 === 0) {
    alert("El número es par");
} else {
    alert("El número es impar");
}


// Tabla de multiplicar
let m_numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicacion!:"));

console.log("Tabla de multiplicar del " + m_numero + ":");

for (let i = 1; i <= 10; i++) {
    let resultado = m_numero * i;
    console.log(m_numero + " x " + i + " = " + resultado);
}



// Calculadora de suma
let numero1 = parseFloat(prompt("Ingrese el primer número de la suma:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número de la suma:"));

let suma = numero1 + numero2;
alert("El resultado de la suma es: " + suma);
