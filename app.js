
// capturar entradas mediante prompt()
const num1 = Number(prompt("Ingresa el primer número:"));
const num2 = Number(prompt("Ingresa el segundo número:"));

// declarar variables y objetos necesarios
const datos = {
  numeros: [num1, num2],
};

// crear funciones para realizar operaciones
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No se puede dividir por cero.";
  }
}

function porcentaje(a, b) {
  return (a * b) / 100;
}

// realizar operaciones
const resultadoSuma = suma(num1, num2);
const resultadoResta = resta(num1, num2);
const resultadoDivision = division(num1, num2);
const resultadoPorcentaje = porcentaje(num1, num2);

// realizar una salida (resultados)
console.log("Resultados:");
console.log("Suma:", resultadoSuma);
console.log("Resta:", resultadoResta);
console.log("División:", resultadoDivision);
console.log("Porcentaje:", resultadoPorcentaje);

// arrays, métodos de búsqueda y filtrado sobre el Array
const arrayNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// metodo de busqueda
function buscarNumero(numero) {
  return arrayNumeros.includes(numero);
}

// metodo de filtrado
function filtrarNumerosMayoresA(valor) {
  return arrayNumeros.filter(num => num > valor);
}

// uso de los metodos de busqueda y filtrado
const numeroBuscado = 50;
console.log("El número", numeroBuscado, "se encuentra en el array:", buscarNumero(numeroBuscado));

const valorFiltro = 35;
console.log("Números mayores a", valorFiltro, ":", filtrarNumerosMayoresA(valorFiltro));
