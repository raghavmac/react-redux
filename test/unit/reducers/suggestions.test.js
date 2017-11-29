import { expect } from 'chai';
import types from '../../../src/constants/suggestions';
import reducer from '../../../src/reducers/suggestions';

describe('Testing Suggestions Reducer', () => {
  describe('Default State Tests', () => {
    const defaultState = {
      isFetching: false,
      suggestion: '',
    };

    it('Must return the default state on unknown action with default state', () => {
      const nextState = reducer(undefined, {});
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the SUGGESTION_FETCHING action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.SUGGESTION_FETCHING,
        payload: { isFetching: true },
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the SUGGESTION_SUCCESS action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.SUGGESTION_SUCCESS,
        payload: {
          isFetching: false,
          suggestion: '',
        },
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the SUGGESTION_ERROR action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.SUGGESTION_ERROR,
        payload: {
          isFetching: false,
          error: true,
        },
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the SUGGESTION_CLEAR action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.SUGGESTION_CLEAR,
        payload: { isFetching: false },
      });
      expect(nextState).to.deep.equal(defaultState);
    });
  });
});
