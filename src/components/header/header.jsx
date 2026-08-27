import { Link } from 'react-router-dom';
import {
    PROJECT_NAME,
    ROUTES,
    ADD_PRODUCT_BUTTON_TEXT
} from '../../constants/constants.js';
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to={ROUTES.HOME} className={styles.logo}>
                    {PROJECT_NAME}
                </Link>
                <Link to={ROUTES.CREATE} className={styles.addButton}>
                    {ADD_PRODUCT_BUTTON_TEXT}
                </Link>
            </div>
        </header>
    );
};
