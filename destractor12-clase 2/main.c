#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero;
    int numpar=0;
    int numimpar=0;
    int numgen=0;
    int numneg=0;
    int numpos=0;
    float porcentajepos;
    float porcentajeneg;
    int flag=0;
    int flagpar=0;
    int maxpar;
    int max;
    int min;
    char letra='s';

    printf("¿Desea ingresar numeros?(s/n)");
    scanf("%c",&letra);

    fflush(stdin);

        while(letra=='s')
        {
            printf("\nIngrese un numero: ");
            scanf("%d",&numero);
            numgen++;
                while(numero==0)
                {
                    printf("\nReingrese un numero: ");
                    scanf("%d",&numero);
                }
                    if(numero%2==0)
                    {
                        numpar++;

                        if(flagpar==0||numero>maxpar)
                        {
                            maxpar= numero;
                        }

                    }

                        else
                        {
                            numimpar++;
                        }

                    if(numero>0)
                    {
                        numpos++;
                    }
                else
                {
                    numneg++;
                }
            if(flag==0||numero>max)
            {
                max= numero;
            }

             if(flag==0||numero<min)
            {
                min= numero;
                flag=1;
            }



            fflush(stdin);

            printf("\n¿Desea ingresar numeros?(s/n)");
            scanf("%c",&letra);
        }

    porcentajepos=(float)(numpos*100)/numgen;
    porcentajeneg=100-porcentajepos;

    printf("\nLa cantidad de numero pares es: %d",numpar);
    printf("\nLa cantidad de numeros impares es: %d",numimpar);
    printf("\nEl porcentaje de positivos es: %.2f",porcentajepos);
    printf("\nEl porcentaje de negativos es: %.2f",porcentajeneg);
    printf("\nEl numero maximo es: %d",max);
    printf("\nEl numero minimo es: %d",min);
    return 0;
}
