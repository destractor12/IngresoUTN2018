function Mostrar()
{
    var num;
    var contador;
    num = prompt("Ingrese un numero:")

    for(var i=0; i<=num ;i++)
    {   

        if(num%2 == 0)
        {
            contador++;
            continue;
        }

    }
alert("cantidad de numeros pares: " + contador)

}//FIN DE LA FUNCIÓN