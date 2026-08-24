import styles from './MainPage.module.css';

export const MainPage = () => {
    const pageHeading = 'Каталог объявлений';
    const containerClass = styles.container;
    const titleClass = styles.title;

    return (
        <main>
            <div className={containerClass}>
                <h2 className={titleClass}>{pageHeading}</h2>
            </div>
        </main>
    );
};
