'use strict';

import test from 'ava';
import xor from 'arr-xor';

import si from '.';

test('smart ignore', t => {
  t.deepEqual(xor(si.def(), si.git(), si.all()), []);
});
