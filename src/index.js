import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

// import { SIMPLE_API_ENDPOINT } from './constants/api'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj960xj2x4evx0126bnhny2mg'
})

const client = new ApolloClient({
  networkInterface
})

registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
