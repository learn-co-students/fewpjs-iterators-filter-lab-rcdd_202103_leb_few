// Code your solution here
function findMatching(driver, name) {
  return driver.filter(function(element) {
    return element.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(driver, name) {
   return driver.filter(function(element) {
     return element.slice(0, name.length) === name;
   })
 }


function matchName(driver, name) {
   return driver.filter(function(element) {
     return element.name.toLowerCase() === name.toLowerCase();
   })
 }
