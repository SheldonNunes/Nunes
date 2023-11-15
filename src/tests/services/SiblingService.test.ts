import React from 'react';
import getCurrentHost from '../../services/SiblingService';

test('getCurrentHost picks the correct sibling for even week', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2023-11-13'));

  const result = getCurrentHost()

  expect(result.name).toBe('Sheldon & Dulcie')
});

test('getCurrentHost picks the correct sibling for week when odd week', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2023-11-11'));

  const result = getCurrentHost()

  expect(result.name).toBe('Sheldon & Dulcie')
});

test('getCurrentHost picks the correct sibling for fortnight after', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2023-11-20'));

  const result = getCurrentHost()

  expect(result.name).toBe('Mieke & Bailey')
});

test('getCurrentHost picks the correct sibling for fortnight before', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2023-11-05'));

  const result = getCurrentHost()

  expect(result.name).toBe('Matt & Jaz')
});
