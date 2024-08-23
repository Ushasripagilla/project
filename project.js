// scripts.js

function filterPhotos(category) {
    var photos = document.querySelectorAll('.photo-item');

    if (category === 'all') {
        photos.forEach(function(photo) {
            photo.classList.add('active');
        });
    } else {
        photos.forEach(function(photo) {
            if (photo.classList.contains(category)) {
                photo.classList.add('active');
            } else {
                photo.classList.remove('active');
            }
        });
    }
}