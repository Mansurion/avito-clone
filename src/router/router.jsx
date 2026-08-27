import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App.jsx';
import { catalogRoutes } from '../features/catalog/routes.jsx';
import { createAdRoutes } from '../features/create-ad/routes.jsx';
import { BASE_NAME } from '../constants/constants.js';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [...catalogRoutes, ...createAdRoutes],
        },
    ],
    { basename: BASE_NAME }
);
