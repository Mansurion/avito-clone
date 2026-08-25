import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/constants.js';
import { Layout } from '../components/layout/layout.jsx';
import { mainPageRoutes } from '../pages/mainPage/routes.jsx';
import { createProductRoutes } from '../pages/createProductPage/routes.jsx';

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layout />,
        children: [
            ...mainPageRoutes,
            ...createProductRoutes
        ]
    }
]);
