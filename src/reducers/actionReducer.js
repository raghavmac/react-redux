import actions from '../constants/actionTypes';

const defaultState = {
  user: ['Daniel Louise'],
  value: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_USER:
      return { ...state, user: [...state.user, action.user] };
    case actions.INCREMENT:
      return { ...state, value: state.value + 1 };
    case actions.DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return { ...state };
  }
};

export default reducer;
