import { PROJECT_NAME } from '../../constants/constants.js';
import styles from './Footer.module.css';

export const Footer = () => {
    const currentYear = '2026';
    const footerText = `© ${currentYear} ${PROJECT_NAME}. Все права защищены.`;

    const footerClass = styles.footer;
    const containerClass = styles.container;
    const textClass = styles.text;

    return (
        <footer className={footerClass}>
            <div className={containerClass}>
                <span className={textClass}>{footerText}</span>
            </div>
        </footer>
    );
};
