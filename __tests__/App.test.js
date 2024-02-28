/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';
import { getFormattedCurrency, getFormattedDate } from '../src/helpers';

// Note: test renderer must be required after react-native.

it('given a date to be formatted', () => {
  expect(getFormattedDate('2024-02-28')).toBe('Feb 28, 2024')
});

it('given a number to formattd as USD currency', () => {
  expect(getFormattedCurrency(180000000)).toBe('$180,000,000.00')
});
