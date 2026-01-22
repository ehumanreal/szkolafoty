const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0; // indeks aktualnego zdjęcia

// otwieranie lightboxa po kliknięciu miniaturki
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

// zamykanie X
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// zamykanie po kliknięciu w tło
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// przejście do poprzedniego zdjęcia
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // zatrzymuje kliknięcie, żeby nie zamknęło lightboxa
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

// przejście do następnego zdjęcia
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});
