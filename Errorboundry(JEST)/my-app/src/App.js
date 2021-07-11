import React from 'react';
import './App.css';
import Greetings from './greetings';
import showError from './showError';
import { ErrorBoundary } from 'react-error-boundary';
function App() {
  let User = {
    firstName: 'Abhishek',
    lastName: 'Patil',
  };
  return (
    <div className='App'>
      <ErrorBoundary FallbackComponent={showError}>
        <Greetings User={User} role='admin' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
