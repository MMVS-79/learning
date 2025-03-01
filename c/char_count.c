#include <stdio.h>

#define MAX_INPUT 1000  // Set a limit on input size
#define IN 1 // inside a word
#define OUT 0 // outside a word

int main()
{
    double c, nc, nl, nw, state;
    nc = 0; // char counter
    nl = 0; // newline counter
    nw = 0; // new word counter
    state = OUT; // word flag
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

	if (c == ' ' || c == '\n' || c == '\t'){
	    state = OUT;
	}
	else if (state == OUT){
	    state = IN;
	    ++nw;
	}
	++nc;

	// Store character if there's space left
        if (i < MAX_INPUT - 1) {
            input[i++] = c;
        }

    }

    printf("\n%s %3s %3s\n","nc","nl","nw");
    printf("%.0f %3.0f %3.0f\n", nc, nl, nw);
    printf("\nProcessed Input:\n%s\n", input);

    return 0; // this is implied for a succesful execution but i explicitly added

}
