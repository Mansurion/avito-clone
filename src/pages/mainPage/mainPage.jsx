import { useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { PRODUCTS_MOCK, MAIN_PAGE_HEADING, ROUTES, ADD_PRODUCT_BUTTON_TEXT } from '../../constants/constants.js';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import styles from './mainPage.module.css';

export const MainPage = () => {
    const pageHeading = MAIN_PAGE_HEADING;
    const { setHeaderContent } = useOutletContext();

    useEffect(() => {
        setHeaderContent(
            <Link
                to={ROUTES.CREATE}
                className={clsx(styles.btn)}
            >
                {ADD_PRODUCT_BUTTON_TEXT}
            </Link>

        );

        return () => setHeaderContent(null);
    }, [setHeaderContent]);

    return (
        <main>
            <div className={clsx(styles.container)}>
                <h2 className={clsx(styles.title)}>{pageHeading}</h2>
                <div className={clsx(styles.grid)}>
                    {PRODUCTS_MOCK.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            city={product.city}
                            date={product.date}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};
