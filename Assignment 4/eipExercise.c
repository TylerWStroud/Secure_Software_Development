#include <stdio.h>
#include <stdlib.h>

void untouchableFunction(void){

     printf("I'm unreachable! The passcode is 00112244!\n");
     exit(0);
}

void cannotReach(void){

     printf("I'm SO hidden!\n");
     exit(0);
}

int main(void){

    printf("Hello World!\n");
    return 0;
}