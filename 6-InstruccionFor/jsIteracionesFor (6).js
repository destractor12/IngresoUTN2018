function Mostrar()
{
    var num;
    var contador=0;
    num = prompt("Ingrese un numero:")

    for(var i=1; i<=num ;i++)
    {   

        if(i%2 == 1)
        {
            continue;
        }
    
     contador++;
     console.log(i);
    }
console.log("cantidad de numeros pares: " + contador)

}//FIN DE LA FUNCIÓN