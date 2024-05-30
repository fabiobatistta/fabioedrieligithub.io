document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("#image-section img");
    var currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add("active");
    }

    setInterval(showNextImage, 5000);
});
