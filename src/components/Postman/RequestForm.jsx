import React from 'react';
import { useRequestContext } from '../../hooks/RequestProvider.jsx';

const RequestForm = () => {
  const { url, method, body, response, handleChange, handleRequestSubmit, handleHistoryReset } = useRequestContext();

  return (
  <section className={styles.formContainer}>
    <form onSubmit={onRequestSubmit}>
      <section className={styles.formSection}>
        <div className={styles.urlDiv}>
          <fieldset>
            <legend>URL</legend>
            <input 
              className={styles.urlInput} 
              type="text" 
              name="url" 
              value={url} 
              id="url" 
              onChange={onUrlChange} 
            />
          </fieldset>
        </div>
        <div className={styles.methodsDiv}>
          <fieldset>
            <legend>METHOD</legend>
            <input 
              type="radio" 
              name="method" 
              value="get" 
              id="get" 
              onChange={onMethodChange} 
              checked={method === 'get'} 
            />
            <label htmlFor="get">Get</label>
            <input 
              type="radio" 
              name="method" 
              value="put" 
              id="put" 
              onChange={onMethodChange} 
              checked={method === 'put'}
            />
            <label htmlFor="put">Put</label>
            <input 
              type="radio" 
              name="method" 
              value="post" 
              id="post" 
              onChange={onMethodChange} 
              checked={method === 'post'} 
            />
            <label htmlFor="post">Post</label>
            <input 
              type="radio" 
              name="method" 
              value="delete" 
              id="delete" 
              onChange={onMethodChange} 
              checked={method === 'delete'} 
            />
            <label htmlFor="delete">Delete</label>
          </fieldset>
        </div>
      </section>
      <section>
        <fieldset>
          <legend>REQUEST BODY</legend>
          <textarea 
            name="body"
            value={body} 
            onChange={onBodyChange} 
            placeholder="Raw JSON" />
        </fieldset>
      </section>
    
      <button>Submit</button>
    </form>
  </section>
);
};