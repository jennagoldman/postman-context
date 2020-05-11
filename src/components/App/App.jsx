import React from 'react';
import { RequestProvider } from '../../hooks/RequestProvider.jsx';
import Postman from '../Postman/Postman.jsx';
import '../../index.css';

export default function App() {
  return (
    <>
      <Header />
      <RequestProvider>
        <Postman />
      </RequestProvider>
    </>
  )
}
  