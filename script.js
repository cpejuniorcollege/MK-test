/* =========================================
   INITIAL WEBSITE LOCK
========================================= */

document.body.classList.add("site-locked");

const exploreTrigger = document.getElementById("exploreTrigger");

exploreTrigger.addEventListener("click", function (event) {

    event.preventDefault();

    // Unlock the complete website
    document.body.classList.remove("site-locked");

    // Wait for the sections to become visible
    setTimeout(() => {

        document.getElementById("explore").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 50);

});
/* =========================================
   MARKET KHETRA 2026
   GALLERY
========================================= */

const gallery = document.getElementById("gallery");

const totalPhotos = 120;

let currentPhoto = 1;


/* =========================================
   CREATE GALLERY
========================================= */

for (let i = 1; i <= totalPhotos; i++) {

    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src = `assets/images/gallery${i}.jpg`;

    image.alt = `Market Kshetra stall ${i}`;

    image.loading = "lazy";

    image.onerror = function () {
        item.remove();
    };

    item.appendChild(image);

    item.addEventListener("click", function () {
        openPhoto(i);
    });

    gallery.appendChild(item);
}


/* =========================================
   LIGHTBOX
========================================= */

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
    <button class="lightbox-close">×</button>

    <button class="lightbox-prev">‹</button>

    <img class="lightbox-image" src="" alt="">

    <button class="lightbox-next">›</button>
`;

document.body.appendChild(lightbox);


const lightboxImage =
    lightbox.querySelector(".lightbox-image");

const closeButton =
    lightbox.querySelector(".lightbox-close");

const previousButton =
    lightbox.querySelector(".lightbox-prev");

const nextButton =
    lightbox.querySelector(".lightbox-next");


/* =========================================
   OPEN PHOTO
========================================= */

function openPhoto(number) {

    currentPhoto = number;

    lightboxImage.src =
        `assets/images/gallery${currentPhoto}.jpg`;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE PHOTO
========================================= */

function closePhoto() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


closeButton.addEventListener(
    "click",
    closePhoto
);


/* =========================================
   NEXT PHOTO
========================================= */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto > totalPhotos) {
        currentPhoto = 1;
    }

    lightboxImage.src =
        `assets/images/gallery${currentPhoto}.jpg`;
}


nextButton.addEventListener(
    "click",
    nextPhoto
);


/* =========================================
   PREVIOUS PHOTO
========================================= */

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 1) {
        currentPhoto = totalPhotos;
    }

    lightboxImage.src =
        `assets/images/gallery${currentPhoto}.jpg`;
}


previousButton.addEventListener(
    "click",
    previousPhoto
);


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closePhoto();
    }

    if (event.key === "ArrowRight") {
        nextPhoto();
    }

    if (event.key === "ArrowLeft") {
        previousPhoto();
    }

});


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE IMAGE
========================================= */

lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {
            closePhoto();
        }

    }
);
/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .gallery-item, .about-content, .info-card, .contact-item"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
 /* =========================================
    EXPLORE EVENT — UNLOCK GALLERY
 ========================================= */

const exploreTrigger = document.getElementById("exploreTrigger");
const exploreSection = document.getElementById("explore");

exploreTrigger.addEventListener("click", function (event) {

    event.preventDefault();

    // Unlock the Explore / Gallery section
    exploreSection.classList.add("explore-open");

    // Smoothly scroll to it
    setTimeout(() => {
        exploreSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 50);

});
