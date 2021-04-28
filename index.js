// Code your solution here
function findMatching(drivers,str) {
  return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers,str) {
  return drivers.filter(driver => driver[0] === str[0])
}

function matchName(drivers,str) {
  return drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase())
}
