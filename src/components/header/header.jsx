import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { ROUTES, PROJECT_NAME } from '../../constants/constants.js';
import styles from './header.module.css';

export const Header = ({ extraContent }) => {
    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.container)}>
                <Link
                    to={ROUTES.HOME}
                    className={clsx(styles.logo)}
                >
                    {PROJECT_NAME}
                </Link>

                {extraContent}
            </div>
        </header>
    );
};
