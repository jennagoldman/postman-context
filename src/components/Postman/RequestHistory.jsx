import React from 'react';
import styles from './RequestHistory.css';

const RequestHistory = ({ history, onReset }) => {
  const pastRequests = history.map((request, i) => (
    <li key={i}>
      <h3 className={styles.requestMethod}>{request.method}</h3>
      <p>{request.url}</p>
    </li>
  ));

  return (
    <section className={styles.historyContainer}>
      <h2>Request History</h2>
      <button onClick={onReset}>Clear</button>
      <ul>
        {pastRequests}
      </ul>
    </section>
  );
};

RequestHistory.propTypes = {
  history: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired
};

export default RequestHistory;
