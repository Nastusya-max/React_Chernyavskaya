import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';
import ErrorBoundary from './errors/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/routing/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

