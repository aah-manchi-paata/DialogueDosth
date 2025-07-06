const dialogues = [
  {
    id: 1,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Raja_Saab_film_poster.jpeg/250px-The_Raja_Saab_film_poster.jpeg',
    telugu: 'హలో హలో హలో, బండి కొంచెం మెల్లగా',
    english: 'Hello Hello Hello, Bandi Konchem Mellaga',
    movie: 'The RajaSaab',
    audio: 'https://github.com/dialogue-dosth/Artist-Prabhas/raw/refs/heads/main/RajaSaab-Hello%20Hello%20Hello.mp3'
  },
  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Raja_Saab_film_poster.jpeg/250px-The_Raja_Saab_film_poster.jpeg',
    telugu: 'అసలే మన లైఫ్ అంతంత మాత్రం',
    english: 'Asale Mana Life Anthantha Maathram',
    movie: 'The RajaSaab',
    audio: 'https://github.com/dialogue-dosth/Artist-Prabhas/raw/refs/heads/main/RajaSaab-Assale%20Mana%20Life.mp3'
  },
  {
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Raja_Saab_film_poster.jpeg/250px-The_Raja_Saab_film_poster.jpeg',
    telugu: 'నేరాలు పాపాలెంటండి, డిగ్నిఫైడ్ గా లవ్ చేస్తేని',
    english: 'Neralu Paapaalentandi, Dignified Ga Love Chestheni',
    movie: 'The RajaSaab',
    audio: 'https://github.com/dialogue-dosth/Artist-Prabhas/raw/refs/heads/main/RajaSaab-Neralu%20Paapalentandi.mp3'
  },
  {
    id: 4,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Raja_Saab_film_poster.jpeg/250px-The_Raja_Saab_film_poster.jpeg',
    telugu: 'మేడమ్ ఏదో తాగిన మత్తులో కరిసేసినట్టు ఉన్నాను',
    english: 'Madam Edho Taagina Matthulo Karisesinattu Unnanu',
    movie: 'The RajaSaab',
    audio: 'https://github.com/dialogue-dosth/Artist-Prabhas/raw/refs/heads/main/RajaSaab-Madam%20Edho%20Taagina%20Matthulo.mp3'
  },
  {
    id: 5,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Raja_Saab_film_poster.jpeg/250px-The_Raja_Saab_film_poster.jpeg',
    telugu: 'దుర్గమ్మతల్లి కాపాడమ్మా',
    english: 'Durgammathalli Kaapadamma',
    movie: 'The RajaSaab',
    audio: 'https://github.com/dialogue-dosth/Artist-Prabhas/raw/refs/heads/main/RajaSaab-Durgammathalli.mp3'
  },
  {
    id: 6,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/The_Raja_Saab_film_poster.jpeg/250px-The_Raja_Saab_film_poster.jpeg',
    telugu: 'తాత వైర్ కొరికేసేడెమో చూడండ్రా బయట',
    english: 'Thaatha Wire Korikesedemo Chudandra Bayata',
    movie: 'The RajaSaab',
    audio: 'https://github.com/dialogue-dosth/Artist-Prabhas/raw/refs/heads/main/RajaSaab-Thaatha%20Wire.mp3'
  }
];

const dialogueList = document.getElementById("dialogue-list");
const audioPlayer = document.getElementById("audio-player");
let currentlyPlayingId = null;

dialogues.forEach(dialogue => {
  const card = document.createElement("div");
  card.className = "card d-flex flex-row align-items-center";

  card.innerHTML = `
    <img src="${dialogue.image}" alt="poster">
    <div class="dialogue-content">
      <h6>${dialogue.telugu}</h6>
      <p>${dialogue.english}<br><small class="text-info">🎬 ${dialogue.movie}</small></p>
      <div class="card-buttons">
        <i class="fa-brands fa-whatsapp text-success" onclick="shareOnWhatsApp('${dialogue.audio}')"></i>
        <i class="fa-solid fa-play text-warning" data-id="${dialogue.id}" onclick="toggleAudio(this, '${dialogue.audio}')"></i>
      </div>
    </div>
  `;

  dialogueList.appendChild(card);
});

function toggleFavorite(element) {
  element.classList.toggle("fa-regular");
  element.classList.toggle("fa-solid");
  element.classList.toggle("active");
}

function shareOnWhatsApp(audioPath) {
  const url = encodeURIComponent(window.location.origin + '/' + audioPath);
  const message = `Listen to this awesome dialogue audio:\n${url}`;
  window.open(`https://api.whatsapp.com/send?text=${message}`, "_blank");
}

function toggleAudio(playIcon, audioSrc) {
  const id = playIcon.getAttribute("data-id");

  // Pause if same audio is playing
  if (currentlyPlayingId === id) {
    if (!audioPlayer.paused) {
      audioPlayer.pause();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    } else {
      audioPlayer.play();
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    }
    return;
  }

  // Stop previous icon
  document.querySelectorAll('.fa-pause').forEach(icon => {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  });

  // Update and play new audio
  currentlyPlayingId = id;
  audioPlayer.src = audioSrc;
  audioPlayer.play();

  playIcon.classList.remove("fa-play");
  playIcon.classList.add("fa-pause");
}
