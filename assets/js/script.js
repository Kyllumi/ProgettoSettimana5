// Modifiche con lo scroll
window.onscroll = function () {
  scrollNav();
};

function scrollNav() {
  if (document.documentElement.scrollTop > 300) {
    document.querySelector(".navbar").classList.add("scrolled");
    document.querySelector("nav ul li button").classList.add("green");
  } else {
    document.querySelector(".navbar").classList.remove("scrolled");
    document.querySelector("nav ul li button").classList.remove("green");
  }
}


// Randomizzazione delle M
function MRandom() {
  let m = document.querySelectorAll("g");
  let randNumb = Math.floor(Math.random() * m.length);

  let mNascosta = m[randNumb];
  mNascosta.classList.add("random");

  setTimeout(() => {
    mNascosta.classList.remove("random");
  }, 1000); // Ogni 1000ms mi 'ritorna' una M
}

// Eseguo MRandom ogni 50 millisecondi
setInterval(MRandom, 100);
