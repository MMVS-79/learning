function averagePair(arr,avg){
    // add whatever parameters you deem necessary - good luck!
    
    let pointer1 = 0;
    let pointer2 = 1;
    
    if(arr.length !== 0) {
        while ( pointer1 < (arr.length - 1)){
            
              if((arr[pointer1]+arr[pointer2])/2 === avg){
                    
                    return true
                  }
              else{
                    pointer2++;
                  if (pointer2 > arr.length){
                        pointer1++;
                        pointer2 = pointer1 + 1; 
                  }
              }
                
  
            
  
        }
        return false;
    }
    else{return false}
  }