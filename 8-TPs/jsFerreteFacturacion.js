/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var num1;
    var num2;
    var num3;
    var suma;

        num1 = parseFloat (document.getElementById("PrecioUno").value);
        num2 = parseFloat (document.getElementById("PrecioDos").value);
        num3 = parseFloat (document.getElementById("PrecioTres").value);
        suma = num1 + num2 + num3;
        
    alert(suma);
}
function Promedio () 
{
	var num1;
    var num2;
    var num3;
    var prom;
    var suma;
        
        num1 = parseFloat (document.getElementById("PrecioUno").value);
        num2 = parseFloat (document.getElementById("PrecioDos").value);
        num3 = parseFloat (document.getElementById("PrecioTres").value);
        suma = num1 + num2 + num3;
        prom = suma/3;

    alert(prom.toFixed(2));      
}
function PrecioFinal () 
{
	var num1;
    var num2;
    var num3;
    var suma;
    var preciofinal;
        
        num1 = parseFloat (document.getElementById("PrecioUno").value);
        num2 = parseFloat (document.getElementById("PrecioDos").value);
        num3 = parseFloat (document.getElementById("PrecioTres").value);
        suma = num1 + num2 + num3;
        iva = suma*0.21;
        preciofinal = suma + iva;
    
    alert(preciofinal)           
}