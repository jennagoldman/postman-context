  
import React from 'react';
import { shallow } from 'enzyme';
import { RequestProvider } from '../../hooks/RequestProvider.jsx';
import RequestForm from './RequestForm.jsx';

describe('RequestForm', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RequestProvider>
        <RequestForm />
      </RequestProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});