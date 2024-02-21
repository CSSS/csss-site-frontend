import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { Main } from './main';

const routes = [
  { path: '/', element: <Main /> }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map(
          route => <Route path={route.path} element={route.element} />
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
