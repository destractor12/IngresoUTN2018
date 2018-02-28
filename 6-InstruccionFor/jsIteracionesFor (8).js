function Mostrar()
{

    var num;
    var esprimo = true;
    
    num = prompt("Ingrese un numero:")
    
            for(var i=2; i<num ;i++)
            {   
      
                if(num%1 == 0)
                {
                    esprimo = false;
                    break;
                }
            }

        if(esprimo == true)
        {
           alert("El numero "+num +" es primo")   
        }
    
    else
    {

    alert("El numero " + num+ " no es primo")

    }


}//FIN DE LA FUNCIÓN