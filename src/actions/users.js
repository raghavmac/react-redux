import types from '../constants/users';

let userId = 0;
const addUser = (name) => {
  userId += 1;
  return {
    type: types.ADD_USER,
    user: {
      id: userId,
      name,
      value: 0,
    },
  };
};

const increment = id => ({
  type: types.INCREMENT,
  id
});

const decrement = id => ({
  type: types.DECREMENT,
  id
});

export {
  addUser,
  increment,
  decrement,
};
