document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
document.querySelectorAll(".gallery-item").forEach(card => {
    const angle = Math.random() * 6 - 3;

const offset = Math.random() * 10 - 5;

const xOffset = Math.random() * 12 - 6;

card.style.setProperty("--rotation", `${angle}deg`);

card.style.setProperty("--offset", `${offset}px`);

card.style.setProperty("--xOffset", `${xOffset}px`);

});

  const lightbox = document.getElementById("lightbox");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightbox = document.querySelector(".close-lightbox");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const lightboxCounter = document.getElementById("lightbox-counter");

  let currentIndex = 0;
  let currentGallery = [];

  function showImage(index) {

    lightboxVideo.pause();

    const item = currentGallery[index];

    const img = item.querySelector(".gallery-img");
    const video = item.querySelector(".gallery-video");

    const caption = item.querySelector('[class^="img-caption"]');

    // Hide both first
    lightboxImg.style.display = "none";
    lightboxVideo.style.display = "none";

    // Stop previous video
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();

    if (img) {

        lightboxImg.src = img.src;
        lightboxImg.style.display = "block";

    }

    if (video) {

        lightboxVideo.src = video.currentSrc || video.src;
        lightboxVideo.style.display = "block";

    }

    lightboxCaption.textContent =
        caption ? caption.textContent : "";

    currentIndex = index;

    lightboxCounter.textContent =
        `${index + 1} / ${currentGallery.length}`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentGallery.length - 1;
}

  galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const section = item.closest(".memory-section");

        currentGallery = Array.from(
            section.querySelectorAll(".gallery-item")
        );

        currentIndex = currentGallery.indexOf(item);

        showImage(currentIndex);

        lightbox.classList.add("show");

    });

});

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");

lightboxVideo.pause();
  });

  prevBtn.addEventListener("click", () => {

    if(currentIndex > 0){

        currentIndex--;

        showImage(currentIndex);

    }

});

nextBtn.addEventListener("click", () => {

    if(currentIndex < currentGallery.length - 1){

        currentIndex++;

        showImage(currentIndex);

    }

});

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("show")) return;

    if (e.key === "Escape") {
        lightbox.classList.remove("show");
        lightboxVideo.pause();
    }

    if (e.key === "ArrowLeft" && currentIndex > 0) {
    showImage(currentIndex - 1);
}

if (e.key === "ArrowRight" && currentIndex < currentGallery.length - 1) {
    showImage(currentIndex + 1);
}

});
});

document.addEventListener("DOMContentLoaded", () => {

    const cover = document.getElementById("page-cover");

    if (!cover) return;


    // ani masuk
    requestAnimationFrame(() => {
        cover.classList.add("reveal");
    });


    // ani keluar
    document.querySelectorAll(".transition-link").forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const coverTitle = document.querySelector(".cover-title");

        if (coverTitle) {
            coverTitle.textContent = "🌻 Returning Home...";
        }

            cover.classList.remove("reveal");
            cover.classList.add("active");


            setTimeout(() => {
                sessionStorage.setItem("returningFromSweetmem", "true");
                window.location.href = link.href;
            }, 1200);

        });

    });

});
