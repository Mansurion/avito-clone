import { clsx } from 'clsx';
import styles from './productCard.module.css';

export const ProductCard = ({ title, price, city, date, image }) => {
    const formattedPrice = `${price.toLocaleString('ru-RU')} ₽`;

    return (
        <article className={clsx(styles.card)}>
            <img src={image} alt={title} className={clsx(styles.image)} />
            <div className={clsx(styles.content)}>
                <h3 className={clsx(styles.title)}>{title}</h3>
                <p className={clsx(styles.price)}>{formattedPrice}</p>
                <p className={clsx(styles.city)}>{city}</p>
                <p className={clsx(styles.date)}>{date}</p>
            </div>
        </article>
    );
};
