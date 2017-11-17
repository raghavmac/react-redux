import actions from '../constants/suggestions';

const defaultState = {
  isFetching: false,
  suggestion: '',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SUGGESTION_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case actions.SUGGESTION_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        suggestion: action.payload.suggestion,
      };
    case actions.SUGGESTION_ERROR:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
};

export default reducer;
