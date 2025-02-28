#include <stdio.h>

#define MAX_INPUT 1000  // Set a limit on input size

int main()
{
    double c, nc, nl;
    nc = 0; //char counter
    nl = 0; //newline counter
    char input[MAX_INPUT];  // Array to store input
    int i = 0; // index for storting input

    while ((c = getchar()) !=EOF){

	// Stop the loop if a certain character is entered (e.g., 'q')
	if (c == 'q') {
	    break;
	}

	if (c == '\n'){
	    ++nl;
	}
	++nc;

	// Store character if there's space left
        if (i < MAX_INPUT - 1) {
            input[i++] = c;
        }

    }

    printf("%.0f %3.0f\n", nc, nl);
    printf("\nProcessed Input:\n%s\n", input);

    return 0; // this is implied for a succesful execution but i explicitly added

}
