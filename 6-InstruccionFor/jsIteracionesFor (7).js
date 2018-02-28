function Mostrar()
{
    var num;
    var contador=0;
    num = prompt("Ingrese un numero:")
    
    for(var i=1; i<=num ;i++)
    {   

        if(num%i == 0)
        {
            contador++;
            console.log(i);
        }
    
             
    }

console.log("cantidad de divisores: " + contador)


}//FIN DE LA FUNCIÓN