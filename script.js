const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const wrapper = document.querySelector('.image-wrapper');

let scale = 1;

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        scale = 1;
        updateZoom();
        wrapper.scrollTop = 0;
        wrapper.scrollLeft = 0;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

/* Zoom kółkiem myszy */
wrapper.addEventListener('wheel', e => {
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 5);
    updateZoom();
}, { passive: false });

function updateZoom() {
    lightboxImg.style.transform = `scale(${scale})`;
}