function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function createBackgroundVideo(){
    if (document.getElementById("background-video")) {
        return;
    }

    const video = document.createElement('video');
    const source = document.createElement('source');

    video.id = "background-video";
    video.loop = true;
    video.classList.add('hide');

    
    source.src  = './assets/media/videos/patagonia.mp4';
    source.type = "video/mp4";

    video.append(source);
    document.body.append(video);

    return video;
}

function initializeApp(){
    const backgroundVideo = createBackgroundVideo();
    const welcomeMessage  = document.getElementById('welcome-message');
    const mainMenu        = document.getElementById('main-menu');

    welcomeMessage.classList.add('hide');
    
    welcomeMessage.addEventListener('transitionend', () => {
        welcomeMessage.remove();
        
        backgroundVideo.play();
        backgroundVideo.classList.remove('hide');
        
        mainMenu.classList.remove('hide');

        gsap.from(mainMenu, {
            y: window.innerHeight + 200,
            duration: 1.2,
            ease: "circ.out"
        });

    }, { once: true });

}

document.addEventListener('pointerdown', initializeApp, { once: true });