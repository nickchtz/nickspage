export const router = {
    async init(routes, config) {
        this.routes = routes;
        this.config = config;

        await this.render(window.location.hash);
        
        window.addEventListener('hashchange', async () => {
            await this.render(window.location.hash);
        });
    },
    async render(route) {
        if(route === ''){
            route = '#home';
        }

        const page = this.routes[route] || this.routes['#notFound'];
        const response = await fetch(`./app/pages/${page.file}.html`);
        const view = await response.text();
        
        const app = document.querySelector('#app');

        app.innerHTML = view;

        const navLinks = document.querySelectorAll('nav ul li a');
        
        if(typeof(page.onload) === "function") {
            await page.onload();
        }
    }
};

export const redirect = (route) => {
    window.location.hash = route;
}