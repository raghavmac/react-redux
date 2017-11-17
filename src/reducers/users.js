import actions from '../constants/users';

const defaultState = {
  users: [{
    id: 0,
    name: 'Daniel Louise',
    value: 0
  }]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user] };
    case actions.INCREMENT:
      return {
        ...state,
        users: state.users.map(user => (
          (user.id === action.id)
          ? { ...user, value: user.value + 1 }
          : user)
        )
      };
    case actions.DECREMENT:
      return {
        ...state,
        users: state.users.map(user => (
          (user.id === action.id)
          ? { ...user, value: user.value - 1 }
          : user)
        )
      };
    default:
      return { ...state };
  }
};

export default reducer;
