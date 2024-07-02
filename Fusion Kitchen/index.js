// Código con errores

// Error de sintaxis: falta un punto y coma al final de la línea
const message = "Hello, world!";

// Uso de una función no definida
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Alice"));

// Error lógico: comparación en lugar de asignación
let x = 10;
if (x == 5) {
  console.log("x es igual a 5");
} else {
  console.log("x no es igual a 5");
}

// Uso incorrecto de un método de cadena
let str = "Hola Mundo";
console.log(str.toUppercase()); // El método correcto es toUpperCase()
