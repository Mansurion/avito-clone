import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import styles from './Layout.module.css';

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
