// Get HTML elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to open Lightbox
function openLightbox(index) {
    currentIndex = index;
    const imgSrc = galleryItems[currentIndex].src;
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

// Function to close Lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to show Next Image
function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Function to show Previous Image
function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Add Event Listeners to each image in the gallery
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
    });
});

// Add Event Listeners for controls
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Add Keyboard support (Optional but great for user experience)
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    }
});