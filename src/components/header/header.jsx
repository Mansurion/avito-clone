import { clsx } from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { PROJECT_NAME, ADD_PRODUCT_BUTTON_TEXT } from '../../constants/constants.js';
import styles from './header.module.css';

export const Header = () => {
    const location = useLocation();
    const isCreatePage = location.pathname === '/create';

    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.container)}>
                <Link to="/" className={clsx(styles.logo)}>
                    {PROJECT_NAME}
                </Link>
                {!isCreatePage && (
                    <Link to="/create" className={clsx(styles.button)}>
                        {ADD_PRODUCT_BUTTON_TEXT}
                    </Link>
                )}
            </div>
        </header>
    );
};
