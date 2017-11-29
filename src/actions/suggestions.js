import types from '../constants/suggestions';

const showProgress = () => ({
  type: types.SUGGESTION_FETCHING,
  payload: { isFetching: true },
});

const showResult = suggestion => ({
  type: types.SUGGESTION_SUCCESS,
  payload: {
    isFetching: false,
    suggestion,
  },
});

const showError = () => ({
  type: types.SUGGESTION_ERROR,
  payload: {
    isFetching: false,
    error: true,
  },
});

const clear = () => ({
  type: types.SUGGESTION_CLEAR,
  payload: { isFetching: false, },
});

const getSuggestions = () => (dispatch) => {
  dispatch(showProgress());
  return fetch('http://faker.hook.io/')
    .then(res => res.json())
    .then(suggestion => dispatch(showResult(suggestion)))
    .catch(() => dispatch(showError()));
};

export {
  showProgress,
  showResult,
  showError,
  clear,
  getSuggestions,
};
