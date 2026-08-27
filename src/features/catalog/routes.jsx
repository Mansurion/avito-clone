import { ROUTES } from '../../constants/constants.js';
import { MainPage } from './mainPage.jsx';

export const catalogRoutes = [
    {
        path: ROUTES.HOME,
        element: <MainPage />,
    },
];
