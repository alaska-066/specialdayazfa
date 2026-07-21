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
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightbox = document.querySelector(".close-lightbox");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const lightboxCounter = document.getElementById("lightbox-counter");

  let currentIndex = 0;
  let currentGallery = [];

  function showImage(index){

  const item = currentGallery[index];

  const img = item.querySelector(".gallery-img");

  const caption = item.querySelector('[class^="img-caption"]');

  lightboxImg.src = img.src;
  lightboxCaption.textContent = caption ? caption.textContent : "";

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
