import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import App from 'pages';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from 'storeRedux'

import 'element-theme-default';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store} >
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
