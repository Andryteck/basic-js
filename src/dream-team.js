function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let dreamTeam = '';
  for (let memberStr of members) {
    if (typeof memberStr == "string") {
      dreamTeam += members[i].split(' ').join('')[0];
    }
  }
  dreamTeam = dreamTeam.toUpperCase().split('').sort().join('');
  return dreamTeam;
 
};




