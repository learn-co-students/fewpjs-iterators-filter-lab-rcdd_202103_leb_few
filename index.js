// Code your solution here
function findMatching(arr,s){
  let m = arr.filter(matching => matching.toLowerCase() === s.toLowerCase());
  return m;
}

function fuzzyMatch(arr,s){
  let l = s.toLowerCase().charAt(0);
  let m = arr.filter(matching => matching.toLowerCase().charAt(0) === l)
  return m
}

function matchName(arr, s){
  let m = arr.filter(r=> r.name === s)
  return m;
}