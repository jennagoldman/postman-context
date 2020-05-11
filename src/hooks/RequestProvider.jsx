import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  }

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