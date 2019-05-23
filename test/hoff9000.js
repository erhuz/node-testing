'use strict';

const test = require('ava');
const hoff9000 = require('../src/hoff9000');

test('test opening the doors', t => {
  t.is(hoff9000.open(), 'I\'m sorry. I can\' let you do that.');
});

test('test closing the doors', t => {
  t.is(hoff9000.close(), 'Did anyone tell you... not to hassle the Hoff 9000?');
});
