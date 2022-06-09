//Substituir números pares de um array por 0.
//Se for vazio, retornar -1.

function substituiPares(array){
    if(!array.length) return console.log(-1);

    const diferenteZero = (num) => num !== 0;
    const numPar = (num) => num % 2 === 0;

    for (let i = 0; i < array.length; i++){
        if (numPar(array[i]) && diferenteZero(array[i])) {
            console.log(`Trocando ${array[i]} por 0!`);
            array[i] = 0;
        } else if (!diferenteZero(array[i])){
            console.log('Este número já vale 0!');
        }
console.log(array);
    }
}

substituiPares([2, 5, 0, 10, 3, 11, 7, 8, 0]);
