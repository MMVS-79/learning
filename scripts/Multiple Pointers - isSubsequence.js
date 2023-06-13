function isSubsequence(str1,str2) {
    // good luck. Add any arguments you deem necessary.
    let pointer1 = 0;
    let pointer2 = 0;
    
    while(pointer1 < str1.length){
        if(pointer2 === str2.length){
            return false;
        }
        else{
            if(str1[pointer1] === str2[pointer2]){
                
                pointer1++;
                
            }
            else{
                
                pointer2++;
            }
        }
    }
    return true;
  }