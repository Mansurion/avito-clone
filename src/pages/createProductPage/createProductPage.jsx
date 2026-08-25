import { clsx } from 'clsx';
import { CREATE_PRODUCT_TITLE, PRODUCT_TITLE_LABEL, PRODUCT_TITLE_PLACEHOLDER } from '../../constants/constants.js';
import styles from './createProductPage.module.css';

export const CreateProductPage = () => {
    return (
        <main className={clsx(styles.page)}>
            <h1 className={clsx(styles.title)}>{CREATE_PRODUCT_TITLE}</h1>
            <form className={clsx(styles.form)}>
                <div className={clsx(styles.field)}>
                    <label className={clsx(styles.label)}>{PRODUCT_TITLE_LABEL}</label>
                    <input
                        type="text"
                        className={clsx(styles.input)}
                        placeholder={PRODUCT_TITLE_PLACEHOLDER}
                    />
                </div>
            </form>
        </main>
    );
};
