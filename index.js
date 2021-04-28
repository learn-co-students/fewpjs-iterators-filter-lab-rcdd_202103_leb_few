// Code your solution here
const findMatching = (driversArray, string) => {
  return driversArray.filter (n => n.toLowerCase() === string.toLowerCase())  //returns the matching list of drivers.
                                                                              //The function should be case insensitive.
}

const fuzzyMatch = (driversArray, string) => {
  return driversArray.filter (n => n.slice(0,string.length) === string)    //returns all drivers whose names begin with the provided letters
}

const matchName = (driversArray, string) => {
  return driversArray.filter (n => n.name === string)     //return each element whose name property matches the provided string argument
}
