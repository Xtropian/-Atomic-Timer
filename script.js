disclamer
let audioContextStarted = false;

function initAudio() {
    if (audioContextStarted) return;
    // Play a silent sound to "unlock" audio on mobile/modern browsers
    sfxBeep.play().then(() => {
        sfxBeep.pause();
        sfxBeep.currentTime = 0;
        audioContextStarted = true;
    });
}

// Add initAudio() to your 'S' key or Click events