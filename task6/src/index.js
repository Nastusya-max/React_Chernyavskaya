import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';
import ErrorBoundary from './errors/ErrorBoundary'
import UserStore from './store/UserStore';

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Context.Provider value={{
        user: new UserStore()
      }}>
        <Provider store={store}>
          <App />
        </Provider>
      </Context.Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

