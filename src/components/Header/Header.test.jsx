  
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.jsx';

describe('Header', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});