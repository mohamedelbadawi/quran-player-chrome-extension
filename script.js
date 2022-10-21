let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;



const swar = [
    {
        name: 'سورة الفاتحة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/001.mp3'
    },
    {
        name: 'سورة البقرة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/002.mp3'
    },
    {
        name: 'سورة آل عمران',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/003.mp3'
    },
    {
        name: 'سورة النساء',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/004.mp3'
    },
    {
        name: 'سورة المائدة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/005.mp3'
    },
    {
        name: 'سورة الأنعام',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/006.mp3'
    },
    {
        name: 'سورة الأعراف',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/007.mp3'
    },
    {
        name: 'سورة الأنفال',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/008.mp3'
    },
    {
        name: 'سورة التوبة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/009.mp3'
    },
    {
        name: 'سورة يونس',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/010.mp3'
    },
    {
        name: 'سورة هود',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/011.mp3'
    },
    {
        name: 'سورة يوسف',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/012.mp3'
    },
    {
        name: 'سورة الرعد',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/013.mp3'
    },
    {
        name: 'سورة إبراهيم',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/014.mp3'
    },
    {
        name: 'سورة الحجر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/015.mp3'
    },
    {
        name: 'سورة النحل',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/016.mp3'
    },
    {
        name: 'سورة الإسراء',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/017.mp3'
    },
    {
        name: 'سورة الكهف',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/018.mp3'
    },
    {
        name: 'سورة مريم',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/019.mp3'
    },
    {
        name: 'سورة طه',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/020.mp3'
    },
    {
        name: 'سورة الأنبياء',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/021.mp3'
    },
    {
        name: 'سورة الحج',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/022.mp3'
    },
    {
        name: 'سورة المؤمنون',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/023.mp3'
    },
    {
        name: 'سورة النور',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/024.mp3'
    },
    {
        name: 'سورة الفرقان',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/025.mp3'
    },
    {
        name: 'سورة الشعراء',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/026.mp3'
    },
    {
        name: 'سورة النمل',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/027.mp3'
    },
    {
        name: 'سورة القصص',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/028.mp3'
    },
    {
        name: 'سورة العنكبوت',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/029.mp3'
    },
    {
        name: 'سورة الروم',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/030.mp3'
    },
    {
        name: 'سورة لقمان',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/031.mp3'
    },
    {
        name: 'سورة السجدة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/032.mp3'
    },
    {
        name: 'سورة الأحزاب',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/033.mp3'
    },
    {
        name: 'سورة سبأ',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/034.mp3'
    },
    {
        name: 'سورة فاطر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/035.mp3'
    },
    {
        name: 'سورة يس',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/036.mp3'
    },
    {
        name: 'سورة الصافات',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/037.mp3'
    },
    {
        name: 'سورة ص',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/038.mp3'
    },
    {
        name: 'سورة الزمر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/039.mp3'
    },
    {
        name: 'سورة غافر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/040.mp3'
    },
    {
        name: 'سورة فصلت',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/041.mp3'
    },
    {
        name: 'سورة الشورى',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/042.mp3'
    },
    {
        name: 'سورة الزخرف',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/043.mp3'
    },
    {
        name: 'سورة الدخان',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/044.mp3'
    },
    {
        name: 'سورة الجاثية',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/045.mp3'
    },
    {
        name: 'سورة الأحقاف',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/046.mp3'
    },
    {
        name: 'سورة محمد',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/047.mp3'
    },
    {
        name: 'سورة الفتح',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/048.mp3'
    },
    {
        name: 'سورة الحجرات',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/049.mp3'
    },
    {
        name: 'سورة ق',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/050.mp3'
    },
    {
        name: 'سورة الذاريات',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/051.mp3'
    },
    {
        name: 'سورة الطور',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/052.mp3'
    },
    {
        name: 'سورة النجم',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/053.mp3'
    },
    {
        name: 'سورة القمر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/054.mp3'
    },
    {
        name: 'سورة الرحمن',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/055.mp3'
    },
    {
        name: 'سورة الواقعة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/056.mp3'
    },
    {
        name: 'سورة الحديد',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/057.mp3'
    },
    {
        name: 'سورة المجادلة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/058.mp3'
    },
    {
        name: 'سورة الحشر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/059.mp3'
    },
    {
        name: 'سورة الممتحنة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/060.mp3'
    },
    {
        name: 'سورة الصف',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/061.mp3'
    },
    {
        name: 'سورة الجمعة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/062.mp3'
    },
    {
        name: 'سورة المنافقون',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/063.mp3'
    },
    {
        name: 'سورة التغابن',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/064.mp3'
    },
    {
        name: 'سورة الطلاق',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/065.mp3'
    },
    {
        name: 'سورة التحريم',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/066.mp3'
    },
    {
        name: 'سورة الملك',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/067.mp3'
    },
    {
        name: 'سورة القلم',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/068.mp3'
    },
    {
        name: 'سورة الحاقة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/069.mp3'
    },
    {
        name: 'سورة المعارج',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/070.mp3'
    },
    {
        name: 'سورة نوح',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/071.mp3'
    },
    {
        name: 'سورة الجن',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/072.mp3'
    },
    {
        name: 'سورة المزمل',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/073.mp3'
    },
    {
        name: 'سورة المدثر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/074.mp3'
    },
    {
        name: 'سورة القيامة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/075.mp3'
    },
    {
        name: 'سورة الإنسان',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/076.mp3'
    },
    {
        name: 'سورة المرسلات',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/077.mp3'
    },
    {
        name: 'سورة النبأ',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/078.mp3'
    },
    {
        name: 'سورة النازعات',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/079.mp3'
    },
    {
        name: 'سورة عبس',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/080.mp3'
    },
    {
        name: 'سورة التكوير',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/081.mp3'
    },
    {
        name: 'سورة الإنفطار',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/082.mp3'
    },
    {
        name: 'سورة المطففين',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/083.mp3'
    },
    {
        name: 'سورة الانشقاق',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/084.mp3'
    },
    {
        name: 'سورة البروج',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/085.mp3'
    },
    {
        name: 'سورة الطارق',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/086.mp3'
    },
    {
        name: 'سورة الأعلى',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/087.mp3'
    },
    {
        name: 'سورة الغاشية',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/088.mp3'
    },
    {
        name: 'سورة الفجر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/089.mp3'
    },
    {
        name: 'سورة البلد',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/090.mp3'
    },
    {
        name: 'سورة الشمس',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/091.mp3'
    },
    {
        name: 'سورة الليل',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/092.mp3'
    },
    {
        name: 'سورة الضحى',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/093.mp3'
    },
    {
        name: 'سورة الشرح',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/094.mp3'
    },
    {
        name: 'سورة التين',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/095.mp3'
    },
    {
        name: 'سورة العلق',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/096.mp3'
    },
    {
        name: 'سورة القدر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/097.mp3'
    },
    {
        name: 'سورة البينة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/098.mp3'
    },
    {
        name: 'سورة الزلزلة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/099.mp3'
    },
    {
        name: 'سورة العاديات',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/100.mp3'
    },
    {
        name: 'سورة التكاثر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/102.mp3'
    },
    {
        name: 'سورة العصر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/103.mp3'
    }
    , {
        name: 'سورة الهمزة',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/104.mp3'
    }
    , {
        name: 'سورة الفيل',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/105.mp3'
    },
    {
        name: 'سورة قريش',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/106.mp3'
    }
    , {
        name: 'سورة الماعون',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/107.mp3'
    }
    , {
        name: 'سورة الكوثر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/108.mp3'
    },
    {
        name: 'سورة الكافرون',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/109.mp3'
    }
    ,
    {
        name: 'سورة النصر',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/110.mp3'
    }
    ,
    {
        name: 'سورة المسد',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/111.mp3'
    }
    ,
    {
        name: 'سورة الإخلاص',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/112.mp3'
    }
    ,
    {
        name: 'سورة الفلق',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/113.mp3'
    }
    ,
    {
        name: 'سورة الناس',
        url: 'https://download.quranicaudio.com/quran/abdulbaset_mujawwad/114.mp3'
    }
]

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = swar[track_index].url;
    curr_track.load();

    track_art.style.backgroundImage = "url('./images/profile.jpg')";
    track_name.textContent = swar[track_index].name;
    track_artist.textContent = 'الشيخ عبدالباسط عبد الصمد';
    now_playing.textContent = "Playing swrah " + (track_index + 1) + " of " + swar.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}


function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}
function playRandom() {
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom() {
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
    if (track_index < swar.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < swar.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * swar.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = swar.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}

$('.random-track').click(function () {
    randomTrack();
});
$('.playpause-track').click(function () {
    playpauseTrack();
});
$('.prev-track').click(function () {
    prevTrack();
});
$('.next-track').click(function () {
    nextTrack();
});
$('.repeat-track').click(function () {
    repeatTrack();
});
