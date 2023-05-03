// seleccionar los elementos HTML de los cuadrados y almacenarlos en variables
const cuadrado1 = document.querySelector('.cuadrado1');
const cuadrado2 = document.querySelector('.cuadrado2');
const cuadrado3 = document.querySelector('.cuadrado3');

// agregar eventos de clic a los cuadrados y escribir la lógica para cambiar el color de fondo
cuadrado1.addEventListener('click', function() {
    document.body.style.backgroundColor = '#b700ff';
});

cuadrado2.addEventListener('click', function() {
    document.body.style.backgroundColor = '#ff5e00';
});

cuadrado3.addEventListener('click', function() {
    document.body.style.backgroundColor = '#00ff95';
});