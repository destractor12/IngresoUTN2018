function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
    {
        case "Febrero":alert("si tiene 28 días.")
        break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "noviembre": alert("si tiene 30 días.")
        break;
        default:alert("si tiene 31 días")
        break;
    }



}//FIN DE LA FUNCIÓN