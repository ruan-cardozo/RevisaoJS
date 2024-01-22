/*
1. Escreva um algoritmo que armazene o valor 10 em uma variável A 
e o valor 20 em uma variável B. 
A seguir (utilizando apenas atribuições entre variáveis) 
troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. 
Ao final, escrever os valoresque ficaram armazenados nas variáveis.
*/

#include <stdlib.h>
#include <stdio.h>

int main (void)
{
    int a = 10;
    int b = 20;
    int aux;

    aux = a;
    a = b;
    b = aux;


    printf("%d\n", a);
    printf("%d\n", b);
    printf("%d", aux);
}
