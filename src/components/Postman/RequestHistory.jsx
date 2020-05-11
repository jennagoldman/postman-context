import React from 'react';
import { useRequestContext } from '../../hooks/RequestProvider.jsx';
import styles from './RequestHistory.css';

const RequestHistory = () => {
  const { history, handleHistoryReset } = useRequestContext();

  const pastRequests = history.map((request, i) => (
    <li key={i}>
      <h3 className={styles.requestMethod}>{request.method}</h3>
      <p>{request.url}</p>
    </li>
  ));

  return (
    <section className={styles.historyContainer}>
      <h2>Request History</h2>
      <button onClick={handleHistoryReset}>Clear</button>
      <ul>
        {pastRequests}
      </ul>
    </section>
  );
};

export default RequestHistory;
