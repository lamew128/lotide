const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it ("return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it ("return [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });3

  it ("return [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});