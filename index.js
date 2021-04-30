// Code your solution here

function findMatching(drivers, string){
  return drivers.filter(function(driver){
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  let letter = string.charAt(0);
  return drivers.filter(function(driver){
    return driver.charAt(0) === letter;
  });
}

function matchName(drivers, string){
  return drivers.filter(function(driver){
    return driver.name === string;
  });
}
