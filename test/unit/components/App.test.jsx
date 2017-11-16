/* eslint no-unused-expressions: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../../src/components/App';

const initiator = () => {
  const props = {
    value: 1,
    increment: () => ({}),
    decrement: () => ({}),
  };

  const wrapper = shallow(<App {...props} />);

  return { wrapper, props };
};

describe('Testing App Component', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();

    it('must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });
});
