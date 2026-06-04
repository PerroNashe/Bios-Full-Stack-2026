const N = 20;

for (let num = 2; num <= N; num++) {        
    let esPrimo = true; //asumo que si, hasta que se demuestro lo contrario 

    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            esPrimo = false;
            break; //no necesito seguir buscando, ya se que no es primo
        }
    }
    
    if (esPrimo) console.log(num);
}