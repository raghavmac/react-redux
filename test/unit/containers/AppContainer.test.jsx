import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import configureMockStore from 'redux-mock-store';
import AppContainer from '../../../src/containers/AppContainer';

const initiator = () => {
  const mockStore = configureMockStore();

  const store = mockStore({
    actionReducer: {
      value: 2,
    },
  });

  const dispatchSpy = spy();
  store.dispatch = dispatchSpy;

  const wrapper = shallow(<AppContainer store={store} />);

  return { wrapper, dispatchSpy };
};

describe('Testing App Container', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();

    it('must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });

  describe('Props Test', () => {
    const { wrapper } = initiator();

    it('Must have the value prop', () => {
      expect(wrapper.props().value).to.not.be.undefined;
      expect(wrapper.props().value).to.not.be.null;
      expect(wrapper.props().value).to.be.eql(2);
    });
  });

  describe('Dispatch Tests', () => {
    const { wrapper, dispatchSpy } = initiator();

    it('Must dispatch the increment action', () => {
      dispatchSpy.reset();
      wrapper.props().increment();
      expect(dispatchSpy.calledOnce).to.be.true;
    });

    it('Must dispatch the decrement action', () => {
      dispatchSpy.reset();
      wrapper.props().decrement();
      expect(dispatchSpy.calledOnce).to.be.true;
    });
  });
});
