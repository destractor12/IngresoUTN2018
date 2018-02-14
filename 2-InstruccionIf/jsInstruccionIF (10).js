function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numaleatorio

	numaleatorio = Math.floor(Math.random()*10)+1;

		if(numaleatorio<=10 && numaleatorio>=9)
		{
			alert("EXCELENTE / " +"Nota: " +numaleatorio);
		}
			else if(numaleatorio>4)
			{
				alert("APROBÓ  / " +"Nota: " +numaleatorio);
			}
				else
				{
					alert("Vamos, la proxima se puede  / " +"Nota: " +numaleatorio);
				}	
}//FIN DE LA FUNCIÓN