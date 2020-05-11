import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  return (
    <RequestContext.Provider value={{ url, method, body}}>
      {children}
    </RequestContext.Provider>
  )
}

RequestProvider.propTypes = {
  children: PropTypes.node
}