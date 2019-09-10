import { expect } from 'chai';

import * as arrayUtils from '../../utils/arrays';

describe('Array utils', () => {
  describe('pickOne', () => {
    it('should pick one element from an array', () => {
      const array = [1, 2, 3];
      expect(arrayUtils.pickOne(array)).to.be.a('number');
    });

    it('should pick the only element reference', () => {
      const alone = new Error();
      const array = [alone];
      expect(arrayUtils.pickOne(array)).to.equal(alone);
    });

    it('should return undefined for an empty array', () => {
      const array = [];
      expect(arrayUtils.pickOne(array)).to.equal(undefined);
    });
  });
});
