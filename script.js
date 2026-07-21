const CORRECT_DATE = "22/07/2008"; 

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbziHhbU18issNI8MU6rRRV52uiexaB2e8f54t_c__JY2vAapg4QqdH1n9FAAPwgsu7BVg/exec";

document.addEventListener("DOMContentLoaded", () => {

const petalContainer = document.getElementById("petals-container");

function createPetal() {

    if (!petalContainer) return;

    const petal = document.createElement("span");

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (8 + Math.random() * 7) + "s";

    petal.style.animationDelay =
        Math.random() * 2 + "s";

    petal.style.opacity =
        0.4 + Math.random() * 0.5;

    const size = 10 + Math.random() * 12;

    petal.style.width = size + "px";
    petal.style.height = size * 1.7 + "px";

    petal.style.transform =
        `rotate(${Math.random()*360}deg)`;

    petalContainer.appendChild(petal);

    petal.addEventListener("animationend", () => {
        petal.remove();
    });

}

for(let i=0;i<15;i++){
    setTimeout(createPetal,i*300);
}

setInterval(createPetal,600);


const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.2

});

revealElements.forEach(element => {

    revealObserver.observe(element);

});

  
  const gate = document.getElementById('birthday-gate');
  const cakeStage = document.getElementById('cake-transition');
  const mainContent = document.querySelector('.page-wrapper');
  const bgVideo = document.querySelector('.background-video');

  const scrollReminder = document.getElementById("scroll-to-letter");

if (scrollReminder) {

    scrollReminder.addEventListener("click", () => {

        document
            .getElementById("letter-section")
            ?.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

    });

}

let hasOpened = false;

const seal = document.getElementById("seal");
const sealInstruction = document.getElementById("seal-instruction");

const envelope = document.getElementById("envelope");


const message = `Dear Azfa,

You're about to start one of the biggest chapters of your life.

New people.
New city.
New memories.

As much as I'm going to miss you, I'm even happier knowing you're finally chasing the future you've worked so hard for, at your dream university and in the major you've always wanted.

I know I've confessed before.
If you're reading this on the 22nd of July, it has been exactly 37 days since the 15th of June, 2026.
Back then, I told you how I felt. I wanted to be by your side, but neither of us even knew where life would take us yet.
Now, we're both preparing for university, especially you with TPB ahead.

I still love you.

I still wish I could be by your side, helping you whenever I can.
But I also understand your circumstances. I know how busy life is becoming, and I know there are things neither of us can control.
So please don't ever blame yourself. I truly understand, and I've made peace with it.

Choosing Dian Didaktika over MAN 4 was one of the best decisions I've ever made.
Because if I hadn't, I probably would've never met you.
And that's something I'll never regret.

Even if you're leaving for Bandung, I'll still be here, doing my best too.
I'll still be cheering for you.
I'll still support you whenever I can.
And I'll still care about you, no matter how far apart we are.
Don't hesitate to text or call when you need it okay?

Thank you...

For every conversation that somehow lasted longer than it should have.
For every stupid joke.
For every little memory hidden somewhere on this page.
For letting me know someone like you exists.

I don't think you realize how much those moments have meant to me.

No matter where life takes us after this, I'll always be grateful that our paths crossed.
Thank you for letting me be a small part of your story.

Happy Birthday, Azfaaa.

I hope university gives you everything you've dreamed of and so much more.
See you when we can.

Oh yeah, and sorry if it was a bit corny AHAHAAAHHA.

With all my love,

Laskara 🌻`;


if (seal && sealInstruction){

    seal.addEventListener("mouseenter", () => {

        if(!hasOpened){
            sealInstruction.textContent =
            "Break the seal.";
        }

    });


    seal.addEventListener("mouseleave", () => {

        if(!hasOpened){
            sealInstruction.textContent =
            "Click the sunflower.";
        }

    });

}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

if(seal){

    seal.addEventListener("click", async () => {

    if(hasOpened) return;

    hasOpened = true;

    sealInstruction.textContent = "Opening...";

    seal.classList.add("broken");

    await sleep(300);

    envelope.classList.add("visible");

    await sleep(500);

    envelope.classList.add("opened");

    await sleep(900);

    letter.innerHTML = message.replace(/\n/g,"<br>");

    sealInstruction.textContent = "For your eyes only. 💛";

});

}

  if (sessionStorage.getItem("azfa_space_unlocked") === "true") {

    if (gate) {
        gate.style.opacity = '0';
        gate.style.visibility = 'hidden';
        gate.style.display = 'none';
    }

    if (cakeStage) cakeStage.style.display = 'none';

    if (mainContent)
        mainContent.classList.add("content-unlocked");

    if (bgVideo)
        bgVideo.play();
}
  const birthdateInput = document.getElementById('birthdate-input');
  if (birthdateInput) {
    const errorMessage = document.getElementById("error-message");
    birthdateInput.addEventListener('input', function(e) {
      
errorMessage.style.display = "none";
birthdateInput.style.borderColor = "";

      let value = e.target.value.replace(/\D/g, ''); 
      let formatted = '';

      if (value.length > 0) {
        formatted = value.substring(0, 2); 
        if (value.length > 2) {
          formatted += '/' + value.substring(2, 4); 
          if (value.length > 4) {
            formatted += '/' + value.substring(4, 8); 
          }
        }
      }
      e.target.value = formatted; 
    });
  }

function isValidBirthday(dateString) {

    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!regex.test(dateString)) {
        return false;
    }

    const [day, month, year] = dateString
        .split("/")
        .map(Number);

    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}
  function verifyBirthday() {
    const inputDate = birthdateInput ? birthdateInput.value : '';
    const flame = document.getElementById('cake-flame');
    const blowText = document.getElementById('blow-text');
    const errorMessage = document.getElementById('error-message');
    const gateCard = document.querySelector('.gate-card');

    if (isValidBirthday(inputDate) && inputDate === CORRECT_DATE) {
      
      sessionStorage.setItem("azfa_space_unlocked", "true");

      if (gate) {
        gate.style.opacity = '0';
        gate.style.visibility = 'hidden';
      }

      if (cakeStage) {
        cakeStage.style.display = 'flex';
        cakeStage.style.opacity = '0';
        
        setTimeout(() => {
          cakeStage.style.opacity = '1';
        }, 50);
      }

      setTimeout(() => {
        if (flame) {
          flame.style.opacity = '0';
          flame.style.transform = 'translateX(-50%) scale(0)';
        }
        if (blowText) {
          blowText.innerText = "Wish granted! 🎉";
          blowText.style.color = "#ffeb3b";
        }

        setTimeout(() => {
          if (cakeStage) {
            cakeStage.style.opacity = '0';
            cakeStage.style.filter = 'blur(20px)';
            
            setTimeout(() => { 
              cakeStage.style.display = 'none'; 
            }, 1000);
          }

          if (mainContent) mainContent.classList.add('content-unlocked');
          if (bgVideo) bgVideo.play();

        }, 1200);

      }, 2200);
      
    } else {

      if (errorMessage) {

    if (!isValidBirthday(inputDate)) {

        errorMessage.innerText =
            "Please enter a valid date (DD/MM/YYYY). 🌻";

    } else {

        errorMessage.innerText =
            "Forgot your birthdayy?? BAAHAHAHAHHAHAH sorry it was a joke pls dont kill me";

    }

    errorMessage.style.display = "block";
}
      if (gateCard) gateCard.classList.add('shake-animation');
      if (birthdateInput) birthdateInput.style.borderColor = '#ff5252';

      setTimeout(() => {
        if (gateCard) gateCard.classList.remove('shake-animation');
      }, 400);
    }
  }
  const unlockBtn = document.getElementById('unlock-btn');
  if (unlockBtn) unlockBtn.addEventListener('click', verifyBirthday);
  if (birthdateInput) {
    birthdateInput.addEventListener('keydown', (e) => {
      if (e.key === "Enter") verifyBirthday();
    });
  }
// sheets
  const wishModal = document.getElementById("wish-modal");
  const openWishBtn = document.getElementById("open-wish-btn");
  const closeWishBtn = document.querySelector(".close-wish");
  const submitWishBtn = document.getElementById("submit-wish-btn");
  const wishTextarea = document.getElementById("wish-textarea");
  const wishStatus = document.getElementById("wish-status-message");

  if (openWishBtn) {
    openWishBtn.addEventListener("click", () => {
      if (wishModal) wishModal.style.display = "flex";
      if (wishTextarea) wishTextarea.value = ""; 
      if (wishStatus) wishStatus.style.display = "none"; 
      if (submitWishBtn) {
        submitWishBtn.disabled = false;
        submitWishBtn.innerText = "Send to the Stars 🚀";
      }
    });
  }

  if (closeWishBtn) {
    closeWishBtn.addEventListener("click", () => {
      if (wishModal) wishModal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === wishModal) {
      wishModal.style.display = "none";
    }
  });

  if (submitWishBtn) {
    submitWishBtn.addEventListener("click", () => {
      const wishContent = wishTextarea ? wishTextarea.value.trim() : "";

      if (wishContent === "") {
        if (wishStatus) {
          wishStatus.innerText = "Please write something first! 🌻";
          wishStatus.style.color = "#ff5252";
          wishStatus.style.display = "block";
        }
        return;
      }

      submitWishBtn.disabled = true;
      submitWishBtn.innerHTML = "⏳ Sending...";
      if (wishStatus) {
        wishStatus.innerText = "Connecting to the stars...";
        wishStatus.style.color = "#cca43b";
        wishStatus.style.display = "block";
      }

if (
    GOOGLE_SCRIPT_URL.includes("SALIN_URL") ||
    GOOGLE_SCRIPT_URL.trim() === ""
) {

    wishStatus.innerText =
        "The wish service hasn't been configured yet.";

    wishStatus.style.color = "#ff5252";
    wishStatus.style.display = "block";

    submitWishBtn.disabled = false;
    submitWishBtn.innerHTML = "Send to the Stars 🚀";

    return;
}
 
      fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
        wish: wishContent
    })
})
.then(async response => {

    if (!response.ok) {
        throw new Error("Server returned " + response.status);
    }

    return response.json();

})
.then(data => {

    if (!data.success) {
        throw new Error(data.message || "Unknown error");
    }

    wishStatus.innerText = "Wish sent successfully! 🌻💛";
    wishStatus.style.color = "#4caf50";

    wishTextarea.value = "";

    submitWishBtn.innerHTML = "Sent! ✨";

    setTimeout(() => {
        wishModal.style.display = "none";
    }, 2000);

})
.catch(error => {

    console.error(error);

    wishStatus.innerText =
        "Couldn't send your wish. Please try again.";

    wishStatus.style.color = "#ff5252";

    submitWishBtn.disabled = false;
    submitWishBtn.innerHTML = "Send to the Stars 🚀";

});
    });
  }
});


window.addEventListener('scroll', function() {
  const miniVideos = document.querySelectorAll('.header-mini-video');
  miniVideos.forEach(video => {
    if (video.paused) {
      video.play().catch(err => console.log("Video play interrupted:", err));
    }
  });
});

const letterPaper =
document.querySelector(".letter-paper");

const letter =
document.getElementById("letter-text");

const letterLightbox =
document.getElementById("letter-lightbox");

const letterLightboxContent =
document.getElementById("letter-lightbox-content");

const closeLetter =
document.querySelector(".close-letter");

if(letterPaper){

    letterPaper.addEventListener("click", ()=>{

    letterLightboxContent.innerHTML =
        letter.innerHTML;

    letterLightbox.classList.add("show");

    document.body.style.overflow = "hidden";

});

}

if(closeLetter){

    closeLetter.addEventListener("click", ()=>{

    letterLightbox.classList.remove("show");

    document.body.style.overflow = "";

});

}

letterLightbox.addEventListener("click",(e)=>{

    if(e.target===letterLightbox){

        letterLightbox.classList.remove("show");

        document.body.style.overflow = "";

    }

});

document.addEventListener("keydown", (e)=>{

    if(e.key==="Escape"){

        letterLightbox.classList.remove("show");

        document.body.style.overflow = "";

    }

});

const cover = document.getElementById("page-cover");

if (cover) {

    document.querySelectorAll(".transition-link").forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            cover.classList.remove("reveal");

            cover.classList.add("active");

            setTimeout(() => {
                window.location.href = link.href;
            }, 1000);

        });

    });

}


window.addEventListener("DOMContentLoaded", () => {

    const cover = document.getElementById("page-cover");

    if (!cover) return;


    const returning = sessionStorage.getItem("returningFromSweetmem");


    if (returning === "true") {

        sessionStorage.removeItem("returningFromSweetmem");

        cover.classList.remove("reveal");


        setTimeout(() => {
            cover.classList.add("reveal");
        }, 100);


    } else {

        cover.classList.add("reveal");

    }

});

