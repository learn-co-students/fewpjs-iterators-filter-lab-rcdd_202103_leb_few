// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,nameToCheck){
  let filtered = drivers.filter(n =>{return n.toLowerCase()===nameToCheck.toLowerCase();});
  return filtered;
}

findMatching(drivers,'Bobby')

function fuzzyMatch(drivers, portionCheck){
  let filtered = drivers.filter(n =>{return n.toLowerCase().slice(0,portionCheck.length)===portionCheck.toLowerCase();});
  return filtered;
}

fuzzyMatch(drivers,"Sa")


const drivers2 = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

function matchName(drivers2, check2){
  let result = drivers2.filter(driver => {return driver.name === check2});
  return result;
}

matchName(drivers2,"Bobby")