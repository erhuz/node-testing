'use strict';

const test = require('ava');
const quotes = require('../src/quotes');

test('test get all quotes', t => {
  t.is(quotes.all.length, 6);
});

test('test specefic quote exists', t => {
  t.not(quotes.all[0].length, 0);
});

test('test get random quote exists', t => {
  t.not(quotes.random().length, 0);
});
