function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num
	while(respuesta == "si")
	{
		num	= parseInt(prompt("Ingrese numero: "))
		respuesta=prompt("¿Desea seguir ingresando numeros?")
		acumulador+=num;
		contador++;
	}
		//do
	//{
		//num	= parseInt(prompt("Ingrese numero: "))
		//respuesta=prompt("¿Desea seguir ingresando numeros?")
		//acumulador+=num;
		//contador++;
	//}while(respuesta == "si")
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN