import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/layout.jsx';
import { MainPage } from '../pages/mainPage/mainPage.jsx';
import { CreateProductPage } from '../pages/createProductPage/createProductPage.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/create',
                element: <CreateProductPage />
            }
        ]
    }
]);
