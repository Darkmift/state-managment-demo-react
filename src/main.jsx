import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';

import store from './store';
import { Provider } from 'react-redux';

import router from './router.jsx';
import {
  // createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
