function capitalize(str) {
  return str.toUpperCase();

}

function exclaim(str) {
  return str + '!';
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  return str[str.length-1];
}

function oneCharacter(str,i) {
  return str[i];

}

function twoCharacters(str, index1, index2) {
  return str[index1] + str[index2];
  // const answer = str[2] + str[11];
  // return answer;

}

function initials(str) {
  // const firstInitial = firstCharacter(str);
  // const spaceIndex = str.IndexOf(' ');
  // const secondInitial = str[spaceIndex+1];
  // return firstInitial + '.' + secondInitial + '.';
  
  return firstCharacter(str) + '.' + str[str.indexOf(' ')+1] + '.';

}

function yeller(str) {
  const capitalized = capitalize(str);
  const whatAmI = exclaim(capitalized);
  const whatAmI2 = exclaim(whatAmI);
  const whatAmI3 = exclaim(whatAmI2);


  return whatAmI3;
  // return capitalize(exclaim(exclaim(exclaim(str))));



}



module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};