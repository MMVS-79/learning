function sameFrequency(int1,int2){
    // good luck. Add any arguments you deem necessary.

      let convertorFunction = num => Number(num);
    
      let int1Arr = Array.from(String(int1), convertorFunction);
      let int2Arr = Array.from(String(int2), convertorFunction);
      
      let total1 = null;
      let total2 = null;
      
      for(let val of int1Arr) {
          
          total1 = total1 + val;
          
      }
      for(let val of int2Arr) {
          
          total2=total2 + val;
          
      }
      if (total1===total2 && total1 !== null && total2 !==null){
          return true;
      }
      else{
          
          return false;
      }
      
  }
  