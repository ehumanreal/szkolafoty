const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// kliknięcie w zdjęcie galerii
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src; // wstaw obrazek do lightboxa
        lightbox.classList.add('active'); // pokaż lightbox
    });
});

// zamykanie przyciskiem X
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// zamykanie po kliknięciu w tło (poza obrazkiem)
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});