#include <stdio.h>
#define MAXLINE 1000 // maximum input line size

int getlinez(char line[], int maxline );
void copy (char to[], char from[]);

// print longest line
int main (){

    int len; // current line length
    int max; // max length seen so far
    char line[MAXLINE]; // current input line
    char longest[MAXLINE]; // longes line saved

    max = 0;
    while ((len = getlinez(line, MAXLINE)) > 0){
	if (len > max){
	    max=len;
	    copy(longest, line);
     	}
        if(max > 0 ){ // There was a line
	printf("%s", longest);
        }

    }


    return 0;

}

// getline will read a line into s and return the length
int getlinez(char s[], int lim) {
    int c, i;

    for (i = 0; i < lim - 1 && (c = getchar()) != EOF && c != '\n'; ++i) {
        s[i] = c;
    }

    if (c == '\n') {
        s[i] = c;
        ++i;
    }

    s[i] = '\0';  // Null-terminate the string
    return i;     // Return the length of the string
}

// copy from into to ; asumes to is big enough
void copy(char to[] , char from[]){
    int i;

    i =0;

    while ((to[i] = from[i]) != '\0'){
        ++i;
    }
}
