import React from 'react';
import { useRequestContext } from '../../hooks/RequestProvider.jsx';

const RequestForm = () => {
  const { url, method, body, handleChange, handleRequestSubmit } = useRequestContext();

  return (
  <section className={styles.formContainer}>
    <form onSubmit={handleRequestSubmit}>
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
              onChange={handleChange} 
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
              onChange={handleChange} 
              checked={method === 'get'} 
            />
            <label htmlFor="get">Get</label>
            <input 
              type="radio" 
              name="method" 
              value="put" 
              id="put" 
              onChange={handleChange} 
              checked={method === 'put'}
            />
            <label htmlFor="put">Put</label>
            <input 
              type="radio" 
              name="method" 
              value="post" 
              id="post" 
              onChange={handleChange} 
              checked={method === 'post'} 
            />
            <label htmlFor="post">Post</label>
            <input 
              type="radio" 
              name="method" 
              value="delete" 
              id="delete" 
              onChange={handleChange} 
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
            onChange={handleChange} 
            placeholder="Raw JSON" />
        </fieldset>
      </section>
    
      <button>Submit</button>
    </form>
  </section>
);
};