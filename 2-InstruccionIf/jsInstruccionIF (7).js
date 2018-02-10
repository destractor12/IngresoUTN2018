function Mostrar()
{
//tomo la edad  
var edad
var estadocivil
var soltero

    edad = parseInt(document.getElementById("edad").value);
    estadocivil = document.getElementById("estadoCivil").value;
    
    if(edad<18 && estadocivil == soltero)
    {
        alert("Esta bien");
    }
    
    else if(edad<18 && estadocivil != soltero)
    {
        alert("Es muy pequeño para NO ser soltero.");
    }
    else if(edad<18 && estadocivil != soltero)
    {
        alert("Es muy pequeño para NO ser soltero.")
    }
    else 
    {
        alert("Esta bien.");
    }
  

}//FIN DE LA FUNCIÓN