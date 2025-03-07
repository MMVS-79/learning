#include <stdio.h>

/* print Farenheit-Celsius table
for fahr = 0, 20, ..., 300 */

int convert(int fahr);

int main(){

  int fahr;
  int lower, upper, step;

  lower = 0;
  upper= 300;
  step = 20;

  fahr = lower;

  while (fahr <= upper){
    printf("%d\t%d\n", fahr, convert(fahr));
    fahr = fahr + step;
  }
}

int convert(int fahr){

    int celsius;
    celsius = 5 * (fahr - 32) / 9;
    return celsius;

}
