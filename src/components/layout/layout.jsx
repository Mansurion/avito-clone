import { Outlet } from 'react-router-dom';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';
import styles from './layout.module.css';

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
