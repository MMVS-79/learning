#include <stdio.h>
#define MAXLINE 1000 // maximum input line size

int getline(char line[], int maxline )
void copy (char to[], char from[])

// print longest line
int main (){

    int len; // current line length
    int max; // max length seen so far
    char line[MAXLINE]; // current input line
    char longest[MAXLINE]; // longes line saved

    max = 0;
    while ((len = getline(line, MAXLINE)) > 0){

    }

}

// getline will read a line into s and return the length
int getline(char s[], int lim) {
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
