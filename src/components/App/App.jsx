import React from 'react';
import { RequestProvider } from '../../hooks/RequestProvider.jsx';

export default function App() {
  return (
    <>
      <Header />
      <RequestProvider>
        <RequestForm />
      </RequestProvider>
    </>
  )
}
  