import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { clsx } from 'clsx';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';
import styles from './layout.module.css';

export const Layout = () => {
    const [headerContent, setHeaderContent] = useState(null);

    return (
        <div className={clsx(styles.wrapper)}>
            <Header extraContent={headerContent} />

            <main className={clsx(styles.content)}>
                <Outlet context={{ setHeaderContent }} />
            </main>

            <Footer />
        </div>
    );
};
