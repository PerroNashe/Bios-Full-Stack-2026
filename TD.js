 1. Imprimir los números del 1 al 100 (un for).

2. Tabla de multiplicar de un número dado:
   numero x 1 hasta numero x 10, con template literal.

3. FizzBuzz del 1 al 30:
   múltiplo de 3 -> Fizz · de 5 -> Buzz · de ambos -> FizzBuzz
   (recordá: chequear % 15 PRIMERO).

4. Números primos hasta N (bucle anidado + break):
   imprimir todos los primos desde 2 hasta N.

Ejercicio 1: 

for (let i = 1; i <= 100; i++) {
  console.log(i);
}    

Ejercicio 2: 

for (let i = 1; i <=10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

Ejercicio 3:

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizBuz`);
  } else if (i % 3 === 0) {
    console.log(`Fiz`);
  } else if (i % 5 === 0) {
    console.log(`Buz`);
  } else {
    console.log(i);
  }
}

Ejercicio 4:

const N = 50;

for (let num = 2; num <= N; num++) {    
    let esPrimo = true; 

    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            esPrimo = false;
            break;
        }
    }
    
    if (esPrimo) console.log(num);
}