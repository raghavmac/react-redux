import actions from '../constants/suggestions';

export function showProgress() {
  return {
    type: actions.SUGGESTION_FETCHING,
    payload: { isFetching: true },
  };
}

export function showResult(suggestion) {
  return {
    type: actions.SUGGESTION_SUCCESS,
    payload: {
      isFetching: false,
      suggestion,
    },
  };
}

export function showError() {
  return {
    type: actions.SUGGESTION_ERROR,
    payload: {
      isFetching: false,
      error: true,
    },
  };
}

export function clear() {
  return {
    type: actions.SUGGESTION_CLEAR,
    payload: {
      isFetching: false,
    },
  };
}

export function getSuggestions() {
  return (dispatch) => {
    dispatch(showProgress());
    return fetch('http://faker.hook.io/').then((response) => {
      if (response.ok) {
        response.json().then((suggestion) => {
          dispatch(showResult(suggestion));
        });
        return;
      }
      dispatch(showError());
    });
  };
}
