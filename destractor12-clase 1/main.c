#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero1;
    float numero2;
    float resultado;
    char letra;

    printf("Ingrese un numero entero: ");
    scanf("%d",&numero1);
    printf("Ingrese un numero con coma: ");
    scanf("%f",&numero2);
    printf("Ingrese una letra:");
    //fflush(stdin);
    //scanf(" %c", &letra);

    letra = getche();
    resultado= numero1+numero2;

    printf("\nresultado:%.2f ",resultado);
    printf("\nLa letra es:%c", letra);

    return 0;
}
/*main o es codigo orientado a objetos\t para tabular, \n para un salto de renglon y \a para hacer sonar el pitido del mother. todos van adentro de las comillas.
int (%d) (entero) 5  9   -4
float    (%f)   (numeros con coma)    3.25    -6.7    -23.464861
char    (%c) (caracter) "a"     "5"     "{"
la , concatena
%.2f es para que solo haya 2 numeros despues de la coma
*/
