import React from 'react';
import { RequestProvider } from '../../hooks/RequestProvider.jsx';
import RequestForm from '../RequestForm/RequestForm.jsx';

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
  