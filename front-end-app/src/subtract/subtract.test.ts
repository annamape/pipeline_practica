import { expect, test } from 'vitest';
import { subtract } from './subtract';

test('adds 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});
