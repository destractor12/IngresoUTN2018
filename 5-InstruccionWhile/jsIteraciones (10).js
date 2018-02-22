function Mostrar()
{
	var sumaneg=0;
	var sumapos=0;
	var	cantpos=0;
	var cantneg=0;
	var cantceros=0;
	var cantnumpares=0;
	var	prompos=0;
	var promneg=0;
	var diferencia=0;
	var num;
	var respuesta="si";

	while(respuesta!="no")
	{
		num	= parseInt(prompt("Ingrese numero: "));
		
		if(num%2==0)
		{
			cantnumpares++;
		}
		if(num>0)
		{
			sumapos += num;
			cantpos++; 
		}
		else if(num<0)
		{
			sumaneg += num;
			cantneg++;
		}
		else
		{
			cantceros++;
		}
		

		respuesta=prompt("¿Desea seguir ingresando numeros?");
	}
	prompos=sumapos/cantpos;
	promneg=sumaneg/cantneg;
	diferencia=sumaneg+sumapos;
	document.write("Suma de los negativos: " + sumaneg +"<br/>");
	document.write("Suma de los positivos: " + sumapos +"<br/>");
	document.write("cantidad de positivos: " + cantpos +"<br/>");
	document.write("Suma de los negativos: " + cantneg +"<br/>");
	document.write("cantidad de ceros: " + cantceros + "<br/>");
	document.write("cantidad de numeros pares: " + cantnumpares + "<br/>");
	document.write("promedio de positivos: " + prompos.toFixed(2) + "<br/>");
	document.write("promedio de negativos: " + promneg.toFixed(2) + "<br/>");
	document.write("La diferencia es: " + diferencia + "<br/>");
}//FIN DE LA FUNCIÓN