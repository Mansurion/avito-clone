import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CREATE_PRODUCT_TITLE,
    PRODUCT_TITLE_LABEL,
    PRODUCT_TITLE_PLACEHOLDER,
    ADD_PRODUCT_BUTTON_TEXT,
    API_URLS,
    ROUTES,
    AGE_GROUPS,
    FORMATS
} from '../../constants/constants.js';
import styles from './createProductPage.module.css';

export const CreateProductPage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [format, setFormat] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAd = {
            title,
            price: Number(price),
            ageGroup,
            format,
            images: imageUrl ? [imageUrl] : [],
        };

        fetch(API_URLS.SECTION_ADS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAd),
        })
            .then(() => navigate(ROUTES.HOME))
            .catch(() => { });
    };

    const ageOptions = Object.values(AGE_GROUPS);
    const formatOptions = Object.values(FORMATS);

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{CREATE_PRODUCT_TITLE}</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                    <label className={styles.label}>{PRODUCT_TITLE_LABEL}</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={PRODUCT_TITLE_PLACEHOLDER}
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Стоимость обучения в месяц (₽)</label>
                    <input
                        type="number"
                        required
                        min="0"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Например, 5000"
                        className={styles.input}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Возрастная группа</label>
                    <select
                        required
                        value={ageGroup}
                        onChange={(e) => setAgeGroup(e.target.value)}
                        className={styles.select}
                    >
                        <option value="" disabled hidden>Выберите возраст</option>
                        {ageOptions.map((age) => (
                            <option key={age} value={age}>{age}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Формат занятий</label>
                    <select
                        required
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className={styles.select}
                    >
                        <option value="" disabled hidden>Выберите формат</option>
                        {formatOptions.map((form) => (
                            <option key={form} value={form}>{form}</option>
                        ))}
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Ссылка на обложку (необязательно)</label>
                    <input
                        type="url"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="https://example.com"
                        className={styles.input}
                    />
                </div>

                <button type="submit" className={styles.submitButton}>
                    {ADD_PRODUCT_BUTTON_TEXT}
                </button>
            </form>
        </main>
    );
};
