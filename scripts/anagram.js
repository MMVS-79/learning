#!/usr/bin/env node



function anagramChecker(arr1,arr2){

    //make two objects to toss the array values and occurences in to key:value or rather char:occurances
    let obj1 = {};
    let obj2 = {};

    if (arr1.length != arr2.length){

        return false;

    };

    for (let val of arr1){
        
        obj1[val] = (obj1[val]+1 || 0) + 1;

    };

    for (let val of arr2){
        
        obj2[val] = (obj2[val]+1 || 0) + 1;

    };

    for (let key in obj1){
        //console.log(key); used to check the loop

        if( !(key in obj2)){

            return false;
        };

        if (obj1[key] != obj2 [key]){

            return false;

        };

        

    };

    return true;


};


console.log(anagramChecker("hello","hello"));