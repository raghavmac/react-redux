import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../../src/actions/actionCreators';

const mockStore = configureMockStore([thunk]);

describe('Testing actions\\actionCreators', () => {
  describe('Individual Actions Tests', () => {
    it('Must return incrementActions', () => {
      expect(actions.incrementAction()).to.deep.equal({
        type: 'INCREMENT',
      });
    });

    it('Must return the decrementAction', () => {
      expect(actions.decrementAction()).to.deep.equal({
        type: 'DECREMENT',
      });
    });
  });

  describe('Store Dispatch Actions Tests', () => {
    it('Must dispatch the incrementAction', () => {
      const store = mockStore({
        actionReducer: {},
      });

      store.dispatch(actions.dispatchIncrement());
      expect(store.getActions()[0]).to.be.eql(actions.incrementAction());
    });

    it('Must dispatch the decrementAction', () => {
      const store = mockStore({
        actionReducer: {},
      });

      store.dispatch(actions.dispatchDecrement());
      expect(store.getActions()[0]).to.be.eql(actions.decrementAction());
    });
  });
});
