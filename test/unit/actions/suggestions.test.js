import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import types from '../../../src/constants/suggestions';
import { showProgress, showResult, showError, clear, getSuggestions } from '../../../src/actions/suggestions';

const mockStore = configureMockStore([thunk]);

const suggestionFetching = {
  type: types.SUGGESTION_FETCHING,
  payload: { isFetching: true },
};

const suggestion = 'Test';
const suggestionSuccess = {
  type: types.SUGGESTION_SUCCESS,
  payload: {
    isFetching: false,
    suggestion,
  },
};

const suggestionError = {
  type: types.SUGGESTION_ERROR,
  payload: {
    isFetching: false,
    error: true,
  },
};

const suggestionClear = {
  type: types.SUGGESTION_CLEAR,
  payload: { isFetching: false },
};

describe('Testing suggestions actions', () => {
  it('Must return showProgress action', () => {
    expect(showProgress()).to.be.eql(suggestionFetching);
  });

  it('Must return showResult action', () => {
    expect(showResult(suggestion)).to.be.eql(suggestionSuccess);
  });

  it('Must return showError action', () => {
    expect(showError()).to.be.eql(suggestionError);
  });

  it('Must return clear action', () => {
    expect(clear()).to.be.eql(suggestionClear);
  });
});

describe('Testing async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Creates SUGGESTION_SUCCESS when fetching suggestion', () => {
    fetchMock.getOnce('http://faker.hook.io/', JSON.stringify('Test'));

    const expectedActions = [
      suggestionFetching,
      suggestionSuccess,
    ];

    const store = mockStore({ suggestions: [] });

    return store.dispatch(getSuggestions()).then(() => {
      expect(store.getActions()).to.be.eql(expectedActions);
    });
  });

  it('Creates SUGGESTION_ERROR when fetching suggestion', () => {
    fetchMock
      .getOnce('http://faker.hook.io/', { status: 500 });

    const expectedActions = [
      suggestionFetching,
      suggestionError,
    ];

    const store = mockStore({ suggestions: [] });

    return store.dispatch(getSuggestions()).then(() => {
      expect(store.getActions()).to.be.eql(expectedActions);
    });
  });
});
