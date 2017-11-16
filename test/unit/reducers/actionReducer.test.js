import { expect } from 'chai';
import reducer from '../../../src/reducers/actionReducer';

describe('Testing Action Reducer', () => {
  describe('Default State Tests', () => {
    it('Must return the default state on unknown action with default state', () => {
      const action = { type: 'RANDOM' };
      const nextState = reducer(undefined, action);
      expect(nextState).to.deep.equal({
        value: 1,
      });
    });

    it('Must return the increment action state with default state', () => {
      const action = { type: 'INCREMENT' };
      const nextState = reducer(undefined, action);
      expect(nextState).to.deep.equal({
        value: 2,
      });
    });

    it('Must return the decrement action state with default state', () => {
      const action = { type: 'DECREMENT' };
      const nextState = reducer(undefined, action);
      expect(nextState).to.deep.equal({
        value: 0,
      });
    });
  });

  describe('Non-Default State Tests', () => {
    it('Must return the same state when an unknown action is performed', () => {
      const prevState = { value: 5 };
      const action = { type: 'RANDOM' };
      const nextState = reducer(prevState, action);
      expect(nextState).to.deep.equal({
        value: 5,
      });
    });

    it('Must return the increment action state', () => {
      const prevState = { value: 4 };
      const action = { type: 'INCREMENT' };
      const nextState = reducer(prevState, action);
      expect(nextState).to.deep.equal({
        value: 5,
      });
    });

    it('Must return the decrement action state', () => {
      const prevState = { value: 6 };
      const action = { type: 'DECREMENT' };
      const nextState = reducer(prevState, action);
      expect(nextState).to.deep.equal({
        value: 5,
      });
    });
  });
});
