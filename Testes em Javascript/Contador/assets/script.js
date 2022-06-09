var currentNumber = 0;
var currentNumberWrapper = document.getElementById('currentNumber');

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumberWrapper < 0) {
        document.getElementById('currentNumber').style.color = 'red';
    }
}


    
//limitar contagem entre -10 e 10 usando addEventListener
//cor vermelha para números negativos