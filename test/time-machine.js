'use strict';

const test = require('ava');
const timeMachine = require('../src/time-machine');

test('test traveling 66 years back', t => {
  t.is(timeMachine(66), 1984);
});

test('test hacking too much time', t => {
  const error = t.throws(() => {
    timeMachine(3000);
  }, Error);

  t.is(error.message, 'Error! Hacking too much time!');
});
