function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta='si';
	var flag=0;

	do
	{
		num	= parseInt(prompt("Ingrese numero: "))
	
		
		if (num >=0)
		{
			positivo = positivo + num;	
		}
		else
		{
			negativo = negativo*num;
			flag=1
		}
	respuesta=prompt("¿Desea seguir ingresando numeros?")
	}	while(respuesta=="si"||isNaN(num))


document.getElementById('suma').value=positivo;

	if( flag== 0)
	{
		negativo = 0;
	}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN