import { clsx } from 'clsx';
import { PROJECT_NAME, CURRENT_YEAR } from '../../constants/constants.js';
import styles from './footer.module.css';

export const Footer = () => {
    const footerText = `© ${CURRENT_YEAR} ${PROJECT_NAME}. Все права защищены.`;

    return (
        <footer className={clsx(styles.footer)}>
            <div className={clsx(styles.container)}>
                <span className={clsx(styles.text)}>{footerText}</span>
                <span className={clsx(styles.separator)}>|</span>
                <span className={clsx(styles.author)}>
                    Made by{' '}
                    <a
                        href="https://github.com/Mansurion"
                        className={clsx(styles.link)}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Mansurion
                    </a>
                </span>
            </div>
        </footer>
    );
};
