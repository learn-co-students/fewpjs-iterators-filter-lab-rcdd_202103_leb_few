// Code your solution here
  //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

  function findMatching(driver, name) {
    return driver.filter(function(n) {
      return n.toLowerCase() === name.toLowerCase();
    });
}

   function fuzzyMatch(driver, name) {
     const nameLength = name.length;
     return driver.filter(function(el) {
       return el.slice(0, nameLength) === name;
     })
   }


   function matchName(driver, name) {
     return driver.filter(function(el) {
       return el.name.toLowerCase() === name.toLowerCase();
     })
   }
