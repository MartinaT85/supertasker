import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';
import {Provider} from 'react-redux'
import { makeServer } from './api';
import store from './store'
import ApplicationContext from './context';
import data from './api/data.json';
import './index.css';

const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ApplicationContext.Provider value={data}>
      <Provider store={store}>
      <Application />
      </Provider>
    </ApplicationContext.Provider>
  </React.StrictMode>,
);
