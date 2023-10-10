const thumbnails = document.querySelectorAll('.thumbnail');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.getElementById('fullsize');
const closeButton = document.getElementById('close-button');

let isExpanded = false;

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        if (!isExpanded) {
            const thumbnailSrc = thumbnail.getAttribute('src');
            fullImage.setAttribute('src', thumbnailSrc);
            fullImageContainer.style.display = 'flex';
            isExpanded = true;
        }
    });
});

closeButton.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
    isExpanded = false;
});

