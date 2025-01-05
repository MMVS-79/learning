function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
      let counter = {}; 
      
      for (var i = 0; i < arguments.length; i++) {
          counter[arguments[i]] = counter[arguments[i]] ? counter[arguments[i]] + 1 : 1;
          if (counter[arguments[i]] > 1){
              
              return true;
              
          }
          
      }
      return false;
  }