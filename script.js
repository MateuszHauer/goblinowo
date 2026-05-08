document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.nav.next');
  const prevButton = document.querySelector('.nav.prev');
  const playPauseButton = document.getElementById('playPause');
  
  let currentIndex = 0;
  let isPlaying = false; // Flaga czy muzyka gra

  // Tablica linków do plików audio
  const audioSources = [
    'sources/crush.mp3',
    'sources/eldest child.mp3',
    'sources/plaster.mp3',
    'sources/the light upon the surface that beckoned deep into the moment and the tiger stepped forth.mp3',
    'sources/meta.mp3',
    'sources/cliche.mp3',
    'sources/afraid.mp3',
    'sources/famous.mp3',
    'sources/hold on.mp3',
    'sources/wish.mp3',
    'sources/ouu.mp3',
    'sources/crush.mp3',
  ];

  // Utwór audio
  const audio = new Audio();
  audio.loop = true; // Muzyka zapętlona dla pojedynczego slajdu

  function updateCarousel(index) {
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * width}px)`;

    // Zmiana źródła audio bez automatycznego odtwarzania
    const newSrc = audioSources[index];
    if (audio.src !== newSrc) {
      audio.src = newSrc;
      if (isPlaying) {
        audio.play(); // Jeśli muzyka była włączona, odtwarzaj nowy utwór
      }
    }
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) currentIndex++;
    else currentIndex = 0;
    updateCarousel(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) currentIndex--;
    else currentIndex = slides.length - 1;
    updateCarousel(currentIndex);
  });

  playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playPauseButton.textContent = '▶️'; // Zmień ikonę na play
    } else {
      // Jeśli klikamy Play i audio nie ma jeszcze ustawionego src (np. user kliknie przed przesunięciem slajdu)
      if (!audio.src) {
        audio.src = audioSources[currentIndex];
      }
      audio.play();
      playPauseButton.textContent = '⏸️'; // Zmień ikonę na pauzę
    }
    isPlaying = !isPlaying;
  });

  updateCarousel(currentIndex); // Ustaw pierwszy slajd bez odtwarzania muzyki
});

// Funkcja revealLetter zostaje bez zmian
function revealLetter() {
  document.querySelector('.reveal-button').style.display = 'none';
  document.querySelector('#letter').style.display = 'block';

  new Typed("#typed", {
    strings: [
"Goblinowo już oficjalnie ogłosiło stan wyjątkowy z okazji Twoich urodzin podobno nawet psy szczekają dupą ciszej bo każdy wie że dziś główna postać miasta ma swoje święto.<br><br>Legenda mówi że kiedyś Goblinowo było normalną miejscowością ale potem pojawiła się Ola Nigger i poziom wstydu i gówna na ulicach wyjebło w kosmos. Od tamtej pory nic już nie było takie samo.<br><br>Życzę ci żebyś w tym nowym roku życia miała zawsze pod ręką papier dwuwarstwowy a nie tylko ten szary papier ścierny co rozdziera dupe na kawałki, niech ci się darzy w tym twoim bagnie żeby hajsu było tyle ile bakterii masz na dupie a szczęście niech cię zalewa tak brutalnie jak rura którą właśnie wywaliło w piwnicy u starego. życzę ci też żebyś nigdy nie doznała efektu posejdona czyli tego zdradzieckiego rykoszetu zimnej wody w sam środek odbytu kiedy akurat wchodzi tzw. jebane kurwa gówno.<br><br>Sto lat w tym szambie niggerze trzymaj fason i nie daj się spuścić w otchłań zapomnienia trzym sie niggerze z goblinowa"
    ],
    typeSpeed: 30,
    backSpeed: 0,
    startDelay: 200,
    smartBackspace: false,
    showCursor: true,
    cursorChar: "|",
    loop: false
  });
}
