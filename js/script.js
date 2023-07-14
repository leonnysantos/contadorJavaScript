const input = document.getElementById('value');
const adicionar = document.getElementById('plus');
const remover = document.getElementById('minus');
const resetar = document.getElementById('reset');

let contador = 0;
let intervalId = 0;

const inputValue = () => {
    input.innerHTML = contador;
}

adicionar.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        contador++;
        inputValue();
    }, 100)
});

remover.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        contador--;
        if (contador <= 0) {
            contador = 0;
        }
        inputValue();
    }, 100)
});

resetar.addEventListener('click', () => {
    input.innerHTML = '0';
    contador = 0;
})

document.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});