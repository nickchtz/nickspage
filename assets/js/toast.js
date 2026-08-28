const toast = {
    DEFAULTS: {
        position: "bottom-center",
        duration: 5000,
        text: "",
    },

    selector: (position) => {
        return `.toast-container[data-position="${position}"]`;
    },

    create: (config) => {
        if (!config) return false;

        const position = config.position || toast.DEFAULTS.position;
        const text = config.text || toast.DEFAULTS.text;
        const duration = config.duration || toast.DEFAULTS.duration;

        // Find an existing container for this position,
        // or create one if it doesn't exist.
        const container =
            document.querySelector(toast.selector(position)) ||
            toast.create_container(position);

        // Create the toast element
        const toastElem = document.createElement("div");

        toastElem.classList.add("toast");
        toastElem.innerHTML = text;

        // Add it to the container
        container.append(toastElem);

        // Trigger the entrance animation
        requestAnimationFrame(() => {
            toastElem.classList.add("toast-visible");
        });

        // Remove toast when clicked
        toastElem.addEventListener("click", () => {
            toastElem.classList.remove("toast-visible");

            setTimeout(() => {
                toastElem.remove();
            }, 250);
        });

        // Automatically remove after the specified duration
        setInterval(() => {
            toastElem.classList.remove("toast-visible");

            setTimeout(() => {
                toastElem.remove();
            }, 250);
        }, duration);
    },

    create_container: (position) => {
        const container = document.createElement("div");

        container.classList.add("toast-container");
        container.dataset.position = position;

        document.body.append(container);

        return container;
    },
};