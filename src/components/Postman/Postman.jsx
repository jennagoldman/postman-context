import React from 'react';
import RequestForm from './RequestForm.jsx';
import RequestHistory from './RequestHistory.jsx';
import Response from './Response.jsx';
import styles from './Postman.css';

const Postman = () => (
    <>
      <div className={styles.flexContainer}>
        <RequestForm />
        {/* <RequestHistory /> */}
      </div>
      <Response />
    </>
  );

export default Postman;

