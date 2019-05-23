'use strict';

const uniqueRandomArray = require('unique-random-array');
const quotes = require('./quotes.json');

module.exports.all = quotes;
module.exports.random = uniqueRandomArray(quotes);
