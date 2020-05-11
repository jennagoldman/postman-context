  
import React from 'react';
import { shallow } from 'enzyme';
import { RequestProvider } from '../../hooks/RequestProvider.jsx';
import Response from './Response.jsx';

describe('Response', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RequestProvider>
        <Response />
      </RequestProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});