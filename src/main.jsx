import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.jsx';
import { catalogRoutes } from './features/catalog/routes.jsx';
import { createAdRoutes } from './features/create-ad/routes.jsx';
import { BASE_NAME } from './constants/constants.js';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...catalogRoutes,
      ...createAdRoutes,
    ],
  },
], {
  basename: BASE_NAME,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
