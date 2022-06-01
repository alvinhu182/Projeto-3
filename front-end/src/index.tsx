import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { GlobalStyle } from './assets/css/global';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
    <BrowserRouter>
    <GlobalStyle/>
      <App />
      <ToastContainer/>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
