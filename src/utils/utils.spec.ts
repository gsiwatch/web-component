import { mergeSortedArrays } from './utils';

describe('mergeSortedArrays', () => {
  it('should merge sorted arrays in ascending order', () => {
    expect(mergeSortedArrays(
      [1, 2, 3],
      [4, 5, 6]
    )).toEqual(['1, 2, 3, 4, 5, 6']);
  });
});
