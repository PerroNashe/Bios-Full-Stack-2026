// Ejercicio 1: 5 variables, una por tipo primitivo
// (string, number, boolean, null, undefined)

let nombre = "Fede";
const edad = 21;
const esEstudiante = true;
const direccion = null;
let contacto; //undefined

console.log(`${nombre} es ${typeof nombre}`); //template-literals
console.log(`${edad} es ${typeof edad}`);
console.log(`${esEstudiante} es ${typeof esEstudiante}`);
console.log(`${direccion} es ${typeof direccion}`);
console.log(`${contacto} es ${typeof contacto}`);


// Ejercicio 2: área y perímetro de rectángulo
// base = 8, altura = 5. Imprimir con template literal.

const base = 8;
const altura = 5;
const area = base * altura;
const perimetro = 2 * (base + altura);

console.log(`area: ${area} perimetro: ${perimetro}`)

// Ejercicio 3: typeof a cada variable del ejercicio 1

// Ejercicio 4: 5 comparaciones con ===

console.log(3 + 2 === 5) // true
consle.log(3 + 8 === 10) // false

// Ejercicio 5: ¿puede votar? (edad >= 18 AND tieneDNI)

const edad = 30;
const nombre = 'Fulanito';
const tieneDNI = true;
const puedeVotar = edad >= 18 && tieneDNI;
console.log(`${nombre} ${puedeVotar ? 'puede votarar' : 'no puede votar'}`);

// Ejercicio 6: saludo personalizado con template literal

const nombre = 'Fede';
const saludo = `Hola ${nombre}, bienvenido a la clase de JavaScript!`;
console.log(saludo);

// Ejercicio 7: precio con descuento (precio - precio * pct / 100)

const precio = 1500;
const descuento = 20;
const precioFinal = precio - (precio * descuento / 100);

console.log(`Precio sin descuento es; ${precio}`);++
console.log(`Precio con descuento es: ${precioFinal}`);

// Ejercicio 8: ¿es par? (n % 2 === 0)

const n = 16;
const esPar = n % 2 === 0;
console.log(`El numero ${n} ${esPar ? 'es par' : 'no es par'}`);

// Ejercicio 9: convertir string a number antes de sumar

const numeroDeEntrada = '100';
const sumaSegura = Number(numeroDeEntrada) + 50;
console.log(sumaSegura)

// Ejercicio 10: mini calculadora (suma, resta, *, /) con template multi-línea
 
const a = 12;
const b = 4;
const calculadora = `Mini Calculadora:
suma: ${a + b}
resta: ${a - b}
multiplicación: ${a * b}
división: ${a / b}
`;
consol.log(calculadora);
