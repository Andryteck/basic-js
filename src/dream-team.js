function createDreamTeam(members) {
  let dreamTeam = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      dreamTeam += members[i].split(' ').join('')[0];
    }
  }
  dreamTeam = dreamTeam.toUpperCase().split('').sort().join('');
  return dreamTeam;
 
};
return Array.isArray(members);



