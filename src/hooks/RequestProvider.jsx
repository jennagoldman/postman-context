import React, { createContext, useState, useEffect, useContext } from 'react';
import makeRequest from '../services/make-request.js';
import PropTypes from 'prop-types';
import RequestForm from '../components/Postman/RequestForm.jsx';

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  }

  useEffect(() => {
    if(localStorage.getItem('requestHistory') === null) {
      localStorage.setItem('requestHistory', JSON.stringify([]));
    }
    const history = localStorage.getItem('requestHistory');
    setHistory(JSON.parse(history));
  }, []);

  useEffect(() => {
    localStorage.setItem('requestHistory', JSON.stringify(history));
  }, [history]);

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

  const handleHistoryReset = () => {
    localStorage.setItem('requestHistory', JSON.stringify([]));
    setHistory([]);
  };

  return (
    <RequestContext.Provider value={{ url, method, body, response, history, handleChange, handleRequestSubmit, handleHistoryReset}}>
      {children}
    </RequestContext.Provider>
  )
}

RequestProvider.propTypes = {
  children: PropTypes.node
}

export const useRequestContext = () => {
  const context = useContext(RequestContext);
  return context;
}

export const useResponse = () => {
  const { response } = useContext(RequestContext);
  return response;
}