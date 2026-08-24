import { PROJECT_NAME } from '../../constants/constants.js';
import styles from './Header.module.css';

export const Header = () => {
    const logoText = PROJECT_NAME;
    const headerClass = styles.header;
    const containerClass = styles.container;
    const logoClass = styles.logo;

    return (
        <header className={headerClass}>
            <div className={containerClass}>
                <span className={logoClass}>{logoText}</span>
            </div>
        </header>
    );
};
