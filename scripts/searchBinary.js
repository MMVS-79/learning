#!/usr/bin/env node

// your code

//fuction accepts sorted array and a value
//create a left pointer (beginning of arry )
//Create right pointer (end of arry)
//while the left pointer comes before the right points
    //create pointer in middle
    //if you find the value want, return the index
    //if the value is too small, move the left pointer up
    //if the vlaue is too big, move the right pointer down
//if you never find the value return -1

function mBsearch(arr,val){

    var lPointer = 0;
    var rPointer = (arr.length) -1;
    var mPointer = Math.round((lPointer + rPointer) / 2);

    while (lPointer < rPointer){

        if ( val === arr[mPointer]){

            return mPointer;
        }

        else if (val > arr[mPointer]){

            lPointer ++;
            mPointer = Math.round((lPointer + rPointer) / 2);

        }

        else if (val < arr[mPointer]){

            rPointer --;
            mPointer = Math.round((lPointer + rPointer) / 2);

        }        
        
        //used to check if mpointer is being aiggned a expected values
        //console.log(mPointer);
        

    }
    return -1;
}

console.log(mBsearch([1,2,3,4,5,6,7,8,9,10,11,12],5));