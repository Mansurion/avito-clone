import { clsx } from 'clsx';
import { PRODUCTS_MOCK } from '../../constants/constants.js';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import styles from './mainPage.module.css';

export const MainPage = () => {
    const pageHeading = 'Каталог объявлений';

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
