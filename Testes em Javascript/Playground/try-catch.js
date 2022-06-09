function verificaTamanho(arr, num) {
    try{
    if (!arr || !num) throw new ReferenceError('Envie os parâmetros!'); 
    if (typeof arr !== 'object') throw new ReferenceError('Envie um Array!'); 
    if (typeof num !== 'number') throw new ReferenceError('Envie um número!'); 
    if (arr.length !== num) throw new RangeError('Tamanho do Array inválido!'); 

    return arr;
} catch(e) {
    if (e instanceof RangeError) {
        console.log('Range Error!');
        console.log(e.stack);
    } else if (e instanceof ReferenceError) {
        console.log('Reference Error!');
        console.log(e.stack);
    } else {
        console.log('Outro tipo de erro!');
        console.log(e.stack);
    }
}
}
console.log(verificaTamanho([1, 2, 3, 4], 5));