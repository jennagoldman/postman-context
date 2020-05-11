  
import React from 'react';
import { shallow } from 'enzyme';
import { RequestProvider } from '../../hooks/RequestProvider.jsx';
import RequestHistory from './RequestHistory.jsx';

describe('RequestHistory', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RequestProvider>
        <RequestHistory />
      </RequestProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});