import actions from '../constants/actionTypes';

const addUser = user => (dispatch) => {
  dispatch({
    type: actions.ADD_USER,
    user,
  });
};
const incrementAction = () => (dispatch) => {
  dispatch({
    type: actions.INCREMENT,
  });
};

const decrementAction = () => (dispatch) => {
  dispatch({
    type: actions.DECREMENT,
  });
};

export default {
  addUser,
  incrementAction,
  decrementAction,
};
