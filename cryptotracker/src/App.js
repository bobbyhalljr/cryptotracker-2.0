import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './index';

import GetAllCoins from './components/GetAllCoins';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 className='hey'>hello world</h1>
        <GetAllCoins />
      </div>
    </ApolloProvider>
  );
}

export default App;
