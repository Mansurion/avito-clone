import { ROUTES } from '../../constants/constants.js';
import { CreateProductPage } from './createProductPage.jsx';

export const createAdRoutes = [
    {
        path: ROUTES.CREATE,
        element: <CreateProductPage />,
    },
];
