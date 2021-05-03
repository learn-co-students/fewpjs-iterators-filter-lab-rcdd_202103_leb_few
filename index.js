function findMatching(drivers ,string) {
return drivers.filter(s => s.toLowerCase()==string.toLowerCase());
}

function fuzzyMatch(drivers ,string) {
return drivers.filter(s => s[0]===string[0])
}
function matchName(drivers ,string) {
return drivers.filter(s => s.name===string)
}
