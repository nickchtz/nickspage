import { home } from '../controllers/home.js';

export const routes = {
    '#notFound': {
        file: 'notFound',
        title: 'Not found',
    },
    '#home': {
        file: 'home',
        title: 'Home',
        onload: home
    },
};