import { home } from '../controllers/home.js';
import { nickagram } from '../controllers/nickagram.js';

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
    '#nickagram': {
        file: 'nickagram',
        title: 'Nickagram',
        onload: nickagram
    },
};