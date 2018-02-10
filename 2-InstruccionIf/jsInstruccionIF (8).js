function Mostrar()
{
//tomo la edad  
    var edad 
    var estadocivil
    var soltero
    
    edad= parseInt(document.getElementById("edad").value);
    estadocivil= document.getElementById("estadoCivil").value;

    if(edad>=18 && estadocivil == soltero)
    {
        alert("Es soltero y no es menor.");
    }
}//FIN DE LA FUNCIÓN