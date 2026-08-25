import heroImage from '../assets/hero.png';

export const PROJECT_NAME = 'Авито Клон';
export const CURRENT_YEAR = String(new Date().getFullYear());
export const CREATE_PRODUCT_TITLE = 'Создать объявление';
export const ADD_PRODUCT_BUTTON_TEXT = 'Разместить объявление';
export const PRODUCT_TITLE_LABEL = 'Название товара';
export const PRODUCT_TITLE_PLACEHOLDER = 'Например, iPhone 13 128 ГБ';

export const PRODUCTS_MOCK = [
    {
        id: 1,
        title: 'Смартфон Apple iPhone 13 128 ГБ',
        price: 45000,
        city: 'Москва',
        date: 'Вчера, 14:23',
        image: heroImage
    },
    {
        id: 2,
        title: 'Велосипед горный 29 дюймов',
        price: 24900,
        city: 'Санкт-Петербург',
        date: 'Сегодня, 10:11',
        image: heroImage
    },
    {
        id: 3,
        title: 'Ноутбук для работы и учебы',
        price: 35000,
        city: 'Новосибирск',
        date: '20 августа, 18:45',
        image: heroImage
    }
];

export const ROUTES = {
    HOME: '/',
    CREATE: '/create',
};

export const MAIN_PAGE_HEADING = 'Каталог объявлений';
