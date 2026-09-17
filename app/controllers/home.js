import { apps } from '../js/constants.js';

export const home = () => {
    Alpine.data('apps', () => ({        
        get apps() {
            return apps;
        }
    }));
};