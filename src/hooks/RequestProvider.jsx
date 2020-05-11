import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  const handleBodyChange = ({ target }) => {
    setBody(target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(response => setResponse(response));

    setHistory(prevHistory => ([
      ...prevHistory,
      {
        url,
        method,
        body
      }
    ]));
    localStorage.setItem('requestHistory', JSON.stringify(history));
  };

  return (
    <RequestContext.Provider value={{ url, method, body, response}}>
      {children}
    </RequestContext.Provider>
  )
}

RequestProvider.propTypes = {
  children: PropTypes.node
}