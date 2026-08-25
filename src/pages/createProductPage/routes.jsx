import { ROUTES } from '../../constants/constants.js';
import { CreateProductPage } from './createProductPage.jsx';

export const createProductRoutes = [
    {
        path: ROUTES.CREATE,
        element: <CreateProductPage />,
    },
];
