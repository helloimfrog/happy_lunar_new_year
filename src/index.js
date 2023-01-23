import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { AppRoute } from './app/routes';

const MainApp = () => (
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
)

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <MainApp />
);

serviceWorker.unregister();
