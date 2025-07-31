document.addEventListener("DOMContentLoaded", function () {
  const lightSwitch = document.getElementById("lightSwitch");
  const lamp = document.querySelector(".lamp");
  const playBtn = document.getElementById("play-btn");
  const audio = document.getElementById("bg-music");

  // Event: klik switch lampu
  lightSwitch.addEventListener("change", function () {
    if (this.checked) {
      lamp.classList.remove("off");
    } else {
      lamp.classList.add("off");
    }
  });

  // Event: klik tombol play music
  playBtn.addEventListener("click", function () {
    audio.play().catch((e) => {
      alert("Gagal memutar audio: " + e.message);
    });
  });
});
