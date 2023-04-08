#!/usr/bin/env node

// Multiple Pointers pattern

function countUniqueValues(arr1){

    //need to set up two counters. one counter is 0 the other is oneand will be the moving one while the counter starting at 0
    //acts as the counter for the number on unique while via the index number / position in array
    let counterA = 0;
    let counterB = 1;
    //need to store the number of unique values or some how sotre ever time our pointers encounter a unique value
    // need one loop to star the interation over through the array 
    for (let i =0; i < arr1.length; i++ ){
        if(arr1[counterA] === arr1[counterB]){

            counterB++;

        }

        else if (arr1[counterA] !== arr1[counterB]){

            counterA++;
            arr1[counterA] = arr1[counterB];
            counterB++;
            

        }
        

    };

    return counterA;

};



console.log(countUniqueValues([1,1,1,2,2,3,3,3,4,4,5,6,6,9,9,9]));