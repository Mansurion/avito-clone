import { ROUTES } from '../../constants/constants.js';
import { MainPage } from './mainPage.jsx';

export const mainPageRoutes = [
    {
        path: ROUTES.HOME,
        element: <MainPage />,
    },
];
