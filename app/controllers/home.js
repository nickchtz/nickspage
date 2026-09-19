import { links } from '../js/constants.js';

export const home = () => {
    Alpine.data('links', () => ({        
        get links() {
            return links;
        }
    }));
};