import { useState, useEffect } from 'react';
import {
    MAIN_PAGE_HEADING,
    API_URLS,
    AGE_GROUPS,
    FORMATS
} from '../../constants/constants.js';
import styles from './mainPage.module.css';

export const MainPage = () => {
    const [ads, setAds] = useState([]);
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedFormat, setSelectedFormat] = useState('');

    useEffect(() => {
        fetch(API_URLS.SECTION_ADS)
            .then((res) => res.json())
            .then((data) => setAds(data))
            .catch(() => setAds([]));
    }, []);

    const filteredAds = ads.filter((ad) => {
        const matchAge = !selectedAge || ad.ageGroup === selectedAge;
        const matchFormat = !selectedFormat || ad.format === selectedFormat;
        return matchAge && matchFormat;
    });

    const ageOptions = Object.values(AGE_GROUPS);
    const formatOptions = Object.values(FORMATS);

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{MAIN_PAGE_HEADING}</h1>

            <div className={styles.filters}>
                <select
                    value={selectedAge}
                    onChange={(e) => setSelectedAge(e.target.value)}
                    className={styles.select}
                >
                    <option value="">Все возраста</option>
                    {ageOptions.map((age) => (
                        <option key={age} value={age}>{age}</option>
                    ))}
                </select>

                <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className={styles.select}
                >
                    <option value="">Все форматы</option>
                    {formatOptions.map((format) => (
                        <option key={format} value={format}>{format}</option>
                    ))}
                </select>
            </div>

            <div className={styles.grid}>
                {filteredAds.map((ad) => (
                    <article key={ad.id} className={styles.card}>
                        {ad.images?.[0] && (
                            <img src={ad.images[0]} alt={ad.title} className={styles.image} />
                        )}
                        <div className={styles.info}>
                            <h2 className={styles.cardTitle}>{ad.title}</h2>
                            <p className={styles.price}>{ad.price} ₽</p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>{ad.ageGroup}</span>
                                <span className={styles.tag}>{ad.format}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
};
