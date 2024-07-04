document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    
    // Abrir el lightbox para img8
    var img8 = document.querySelector(".lightbox-img");
    var lightboxImg8 = document.getElementById("lightboxImg8");
    var imgContent8 = document.getElementById("imgContent8");

    img8.addEventListener('click', function() {
        lightboxImg8.style.display = "block";
        imgContent8.src = this.src;
    });

    // Cerrar el lightbox para img8
    lightboxImg8.querySelector('.close').addEventListener('click', function() {
        lightboxImg8.style.display = "none";
    });

    // Cerrar el lightbox al hacer clic fuera de la imagen
    window.addEventListener('click', function(event) {
        if (event.target == lightboxImg8) {
            lightboxImg8.style.display = "none";
        }
    });

    document.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('click', function() {
            if (img.id !== 'no-modal-1' && img.id !== 'no-modal-8') {
                modal.style.display = "block";
            }
        });
    });

    span.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});



