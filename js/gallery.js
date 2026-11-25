// Photo gallery on project-detail.html
document.addEventListener("DOMContentLoaded", function () {
    var mainPhoto = document.getElementById("main-photo");
    var counter = document.getElementById("photo-counter");
    var lightbox = document.getElementById("photo-lightbox");
    var lightboxPhoto = document.getElementById("lightbox-photo");
    var thumbs = document.querySelectorAll(".photo-thumbs img");
    var current = 0;

    // Shows photo number "index" in the main area and the enlarged view
    function showPhoto(index) {
        // Going past the last photo loops back to the first (and the other way round)
        current = (index + thumbs.length) % thumbs.length;

        mainPhoto.src = thumbs[current].src;
        mainPhoto.alt = thumbs[current].alt;
        lightboxPhoto.src = thumbs[current].src;
        lightboxPhoto.alt = thumbs[current].alt;
        counter.textContent = "Photo " + (current + 1) + " of " + thumbs.length + " (click to enlarge)";

        thumbs.forEach(function (thumb) {
            thumb.classList.remove("active");
        });
        thumbs[current].classList.add("active");
    }

    // Clicking a small photo shows it
    thumbs.forEach(function (thumb, index) {
        thumb.addEventListener("click", function () {
            showPhoto(index);
        });
    });

    // Arrow buttons
    document.getElementById("photo-prev").addEventListener("click", function () {
        showPhoto(current - 1);
    });
    document.getElementById("photo-next").addEventListener("click", function () {
        showPhoto(current + 1);
    });

    // Clicking the main photo opens the enlarged view, clicking anywhere closes it.
    // (A <dialog> also closes by itself when Esc is pressed.)
    mainPhoto.addEventListener("click", function () {
        lightbox.showModal();
    });
    lightbox.addEventListener("click", function () {
        lightbox.close();
    });

    // Left and right arrow keys move between photos
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            showPhoto(current - 1);
        }
        if (event.key === "ArrowRight") {
            showPhoto(current + 1);
        }
    });
});
