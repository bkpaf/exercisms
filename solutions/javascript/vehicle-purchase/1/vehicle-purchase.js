// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if (kind === 'car'  || kind === 'truck') {
    return true
  }else {
    return false
  };
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
 export function chooseVehicle(option1, option2) {
  let vehicles = [option1,option2];
  vehicles.sort((a, b)=>a.localeCompare(b));
  return `${vehicles[0]} is clearly the better choice.`
}


/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  //if vehicle is less than 3yrs it costs 80% of original price
  // if vehicle is more than 10 yrs it costs 50% og price;
  //if vehicle is 3 or more but less than 30 it costs 70%
  if (age < 3){
    return originalPrice - (0.2*originalPrice);
  } else if (age >= 3 && age <= 10){
    return originalPrice - (0.3*originalPrice)
  } else {
    return 0.5*originalPrice
  };
}
