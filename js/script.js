const spesa = [
    'pasta',
    'formaggio',
    'sale',
    'pomodori',
    'carne',
    'uova',
    'coca cola',
    'fanta',
    'gelato',
];

const lista = document.querySelector('ul');
let items = 0;

while(items < spesa.length){
    lista.innerHTML += `<li>${spesa[items]}</li>`
    items++;
}
