import { expect } from 'chai';
import types from '../../../src/constants/users';
import { addUser, increment, decrement } from '../../../src/actions/users';

describe('Testing users actions', () => {
  it('Must return addUser action', () => {
    const expectedAction = {
      type: types.ADD_USER,
      user: {
        id: 1,
        name: 'test',
        value: 0,
      },
    };
    expect(addUser('test')).to.be.eql(expectedAction);
  });

  it('Must return increment action', () => {
    const expectedAction = {
      type: types.INCREMENT,
      id: 1,
    };
    expect(increment(1)).to.be.eql(expectedAction);
  });

  it('Must return decrement action', () => {
    const expectedAction = {
      type: types.DECREMENT,
      id: 1,
    };
    expect(decrement(1)).to.be.eql(expectedAction);
  });
});
