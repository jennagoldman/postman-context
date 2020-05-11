import React from 'react';
import RequestForm from './RequestForm.jsx';
import Response from '../../components/Response/Response';
import RequestHistory from '../../components/RequestHistory/RequestHistory.jsx';
import styles from './Postman.css';

const Postman = () => (
    <>
      <div className={styles.flexContainer}>
        <RequestForm />
        <RequestHistory />
      </div>
      <Response response={response} />
    </>
  );

export default Postman;

