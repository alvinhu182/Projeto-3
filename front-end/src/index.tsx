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
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  'client-id': 'AUZ1Nwcv8dAkU1Y_tbGKnnXdGWonNWgLL5vTwqYRmz6PDnc4TGpVI7F-6WGmvg5Za9whX5fSm7C0PkPD',
  currency: 'BRL'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
    <PayPalScriptProvider options={paypalOptions}>
      <BrowserRouter>
      <GlobalStyle/>
      <App />
      <ToastContainer/>
      </BrowserRouter>
      </PayPalScriptProvider>
    </ReduxProvider>
  </React.StrictMode>
);
