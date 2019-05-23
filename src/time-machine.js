'use strict';

/**
 * Time machine to travel back in time.
 *
 * @param {number} yearsToTravel
 *
 * @return {number}
 */
module.exports = yearsToTravel => {
  const currentYear = 2050;

  const year = currentYear - yearsToTravel;

  if (

    year < 0) {
    throw new Error('Error! Hacking too much time!');
  }

  return year;
};
