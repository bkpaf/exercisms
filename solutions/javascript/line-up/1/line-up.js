//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/*
Create a format function that will have a string literal  `{name}, you are the {ordinalNum} customer we serve today. Thank you!`
Create ordinalNum function that will take a number and render it as a ordinal numeral


*/
export const ordinalNum = (number) => {
  let strNumber = '';
  // render the number as a string
  strNumber = number.toString();
  //if string ends 11, 12 or 13 then append th to the number else
  if (strNumber.endsWith('11')| strNumber.endsWith('12') | strNumber.endsWith('13')) {
    return strNumber + 'th';
  //determine the last character of the string
  // if last character is 1 then append st to number
  } else if (strNumber[strNumber.length - 1] === '1'){
    return strNumber + 'st';
  // if last character is 2 then append nd to the number
  } else if (strNumber[strNumber.length - 1] === '2'){
    return strNumber + 'nd';
  // if last character is 3 then append rd to the number
  } else if (strNumber[strNumber.length - 1] === '3'){
    return strNumber + 'rd';
  //else append th to the number
  } else {
    return strNumber + 'th';
  };
  
  
  
  
  
};
export const format = (name, number) => {
  return `${name}, you are the ${ordinalNum(number)} customer we serve today. Thank you!`;
};

