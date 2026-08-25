import { Outlet } from 'react-router-dom';
import { clsx } from 'clsx';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';
import styles from './layout.module.css';

export const Layout = () => {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <main className={clsx(styles.content)}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
