const numbers = [];
let contador = 1;



while(contador <= 3){
    let number = Number(prompt(`Ingresa el numero ${contador}: `));
    numbers.push(number);
    contador++;
}

let numMax = 0;
let numMin = numbers[0];

for(i = 0; i < numbers.length; i++){
    if(numMax < numbers[i]){
        numMax = numbers[i];
    }

    if(numMin > numbers[i]){
        numMin = numbers[i];
    }
}
numbers.sort((a,b) => b - a);
let numMid = numbers[1];

console.log(`El numero mayor es ${numMax}`);
console.log(`El numero medio es ${numMid}`);
console.log(`El numero minimo es ${numMin}`);

console.log(`Ordende mayor a menor: ${numbers}`);


numbers.sort((a,b) => a - b);
console.log(`Ordende menor a mayor: ${numbers}`);

if(numMax === numMid && numMid === numMin){
    console.log(`Losn tres numeros ${numMax}, ${numMid} y ${numMid} son iguales`);
}else if(numMax === numMid){
    console.log(`Losn numeros ${numMax} y ${numMid} son iguales`);
} else if(numMid === numMin){
    console.log(`Losn numeros ${numMid} y ${numMin} son iguales`);
}else{
    console.log(`Ningun numero es igual`);
}