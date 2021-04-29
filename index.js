// Code your solution here
 const fuzzyMatch = (array, string) => {
  return array.filter(word => word.slice(0,string.length) === string);
};

const findMatching = (array, string) => {
  return array.filter(word=>word.toUpperCase()===string.toUpperCase());
};

 const matchName = (array, string) => {
   return array.filter(word=>word.name===string);
 };