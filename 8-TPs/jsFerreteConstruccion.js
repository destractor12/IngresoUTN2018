/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    perimetro = 2* largo + 2 * ancho;

    alambre = perimetro*3

    alert("Se necesitan "+ alambre +" metros de alambre");
}
function Circulo () 
{
	var radio;
    var perimetro;
    var alambre;

        radio = parseInt(document.getElementById("Radio").value);

       perimetro = 2 * radio * Math.PI;
       
       alambre =  perimetro * 3;

    alert("La cantidad de metros de alambre que se necesitan son: " +alambre.toFixed(2));
}
function Materiales () 
{
	var largo;
    var ancho;
    var superficie;
    var cal;
    var cemento;

        largo = parseInt(document.getElementById("Largo").value);
        ancho = parseInt(document.getElementById("Ancho").value);

        superficie = largo*ancho;

        
}