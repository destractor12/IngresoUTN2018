/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var aumento;

            sueldo = parseInt(document.getElementById("sueldo").value);

            aumento = sueldo*0.10;

            document.getElementById("resultado").value = sueldo+aumento;

}
