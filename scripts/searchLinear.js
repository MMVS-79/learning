#!/usr/bin/env node

// your code

//function accepts an array and a value
//loop though array and check if the current array element is equal
//to the vlaue 
//if it is, reutrn the index at which the element is found
//if the value is never found, return -1

function mSearch(arr,val){

    for (let i = 0; i< arr.length; i++){

        if(val == arr[i]){

            return i;
        }


    }

    return -1;



}

//in arrat test case
console.log(mSearch([1,2,3],2));
//not in array test case
console.log(mSearch([1,2,3],4));