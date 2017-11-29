import types from '../constants/suggestions';

const defaultState = {
  isFetching: false,
  suggestion: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SUGGESTION_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case types.SUGGESTION_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        suggestion: action.payload.suggestion,
      };
    case types.SUGGESTION_ERROR:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    case types.SUGGESTION_CLEAR:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        suggestion: '',
      };
    default:
      return { ...state };
  }
};

export default reducer;
