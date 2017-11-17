import actions from '../constants/users';

let userId = 0;
const addUser = name => (dispatch) => {
  dispatch({
    type: actions.ADD_USER,
    user: {
      id: userId += 1,
      name,
      value: 0,
    },
  });
};

const incrementAction = id => (dispatch) => {
  dispatch({
    type: actions.INCREMENT,
    id
  });
};

const decrementAction = id => (dispatch) => {
  dispatch({
    type: actions.DECREMENT,
    id
  });
};

export default {
  addUser,
  incrementAction,
  decrementAction,
};
