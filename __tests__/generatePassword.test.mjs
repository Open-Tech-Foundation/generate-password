import generatePassword from '../src/index.mjs';

import crypto from 'crypto';

Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});

test('default length is 8', () => {
  expect(generatePassword()).toHaveLength(8);
});

it('returns 15 characters', () => {
  expect(generatePassword({length: 15})).toHaveLength(15);
});
