import { nickagram_posts } from '../js/constants.js';

export const nickagram = () => {
    Alpine.data('posts', () => ({        
        get posts() {
            return nickagram_posts;
        }
    }));
};