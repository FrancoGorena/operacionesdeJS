let mediodeTransporte = prompt('Cuanto tienes que viajar?');

 mediodeTransporte = parseInt(mediodeTransporte);

 if (mediodeTransporte >= 0 && mediodeTransporte < 1000) {
    alert('debes viajar a pie'); 
 }
 else if (mediodeTransporte >= 1001 && mediodeTransporte< 10000) {
    alert('debes viajar en bicicleta'); 
 }
 else if (mediodeTransporte >= 10001 && mediodeTransporte< 30000) {
    alert('debes viajar en colectivo');
 }
 else if (mediodeTransporte >= 30001 && mediodeTransporte< 100000) {
    alert('debes viajar en automovil');
 }
 else {
    alert('Deberás tomar un avión');
 }
 /* Array para mostrar el número más alto*/

 let numeros = [20, 5, 12, 19, 33, 54, 21, 11, 8];

 console.log(Math.max(...numeros));



