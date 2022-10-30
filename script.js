let now_playing = document.querySelector('.now-playing');
let swrah_art = document.querySelector('.swrah-art');
let swrah_name = document.querySelector('.swrah-name');
let swrah_artist = document.querySelector('.swrah-artist');

let playpause_btn = document.querySelector('.playpause-swrah');
let next_btn = document.querySelector('.next-swrah');
let prev_btn = document.querySelector('.prev-swrah');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_swrah = document.createElement('audio');
let base_url = `https://download.quranicaudio.com/quran/`
let swrah_index = 0;
let sheikh_index = 0
let isPlaying = false;
let isRandom = false;
let updateTimer;


const sheikhList = [{ name: "abdulbaset_mujawwad", img: "./images/profile.jpg" }, { name: "yasser_ad-dussary", img: "./images/dossari.jpg" }]


const swar = [
    {
        name: `سورة الفاتحة`,
        url: `/001.mp3`
    },
    {
        name: `سورة البقرة`,
        url: `/002.mp3`
    },
    {
        name: `سورة آل عمران`,
        url: `/003.mp3`
    },
    {
        name: `سورة النساء`,
        url: `/004.mp3`
    },
    {
        name: `سورة المائدة`,
        url: `/005.mp3`
    },
    {
        name: `سورة الأنعام`,
        url: `/006.mp3`
    },
    {
        name: `سورة الأعراف`,
        url: `/007.mp3`
    },
    {
        name: `سورة الأنفال`,
        url: `/008.mp3`
    },
    {
        name: `سورة التوبة`,
        url: `/009.mp3`
    },
    {
        name: `سورة يونس`,
        url: `/010.mp3`
    },
    {
        name: `سورة هود`,
        url: `/011.mp3`
    },
    {
        name: `سورة يوسف`,
        url: `/012.mp3`
    },
    {
        name: `سورة الرعد`,
        url: `/013.mp3`
    },
    {
        name: `سورة إبراهيم`,
        url: `/014.mp3`
    },
    {
        name: `سورة الحجر`,
        url: `/015.mp3`
    },
    {
        name: `سورة النحل`,
        url: `/016.mp3`
    },
    {
        name: `سورة الإسراء`,
        url: `/017.mp3`
    },
    {
        name: `سورة الكهف`,
        url: `/018.mp3`
    },
    {
        name: `سورة مريم`,
        url: `/019.mp3`
    },
    {
        name: `سورة طه`,
        url: `/020.mp3`
    },
    {
        name: `سورة الأنبياء`,
        url: `/021.mp3`
    },
    {
        name: `سورة الحج`,
        url: `/022.mp3`
    },
    {
        name: `سورة المؤمنون`,
        url: `/023.mp3`
    },
    {
        name: `سورة النور`,
        url: `/024.mp3`
    },
    {
        name: `سورة الفرقان`,
        url: `/025.mp3`
    },
    {
        name: `سورة الشعراء`,
        url: `/026.mp3`
    },
    {
        name: `سورة النمل`,
        url: `/027.mp3`
    },
    {
        name: `سورة القصص`,
        url: `/028.mp3`
    },
    {
        name: `سورة العنكبوت`,
        url: `/029.mp3`
    },
    {
        name: `سورة الروم`,
        url: `/030.mp3`
    },
    {
        name: `سورة لقمان`,
        url: `/031.mp3`
    },
    {
        name: `سورة السجدة`,
        url: `/032.mp3`
    },
    {
        name: `سورة الأحزاب`,
        url: `/033.mp3`
    },
    {
        name: `سورة سبأ`,
        url: `/034.mp3`
    },
    {
        name: `سورة فاطر`,
        url: `/035.mp3`
    },
    {
        name: `سورة يس`,
        url: `/036.mp3`
    },
    {
        name: `سورة الصافات`,
        url: `/037.mp3`
    },
    {
        name: `سورة ص`,
        url: `/038.mp3`
    },
    {
        name: `سورة الزمر`,
        url: `/039.mp3`
    },
    {
        name: `سورة غافر`,
        url: `/040.mp3`
    },
    {
        name: `سورة فصلت`,
        url: `/041.mp3`
    },
    {
        name: `سورة الشورى`,
        url: `/042.mp3`
    },
    {
        name: `سورة الزخرف`,
        url: `/043.mp3`
    },
    {
        name: `سورة الدخان`,
        url: `/044.mp3`
    },
    {
        name: `سورة الجاثية`,
        url: `/045.mp3`
    },
    {
        name: `سورة الأحقاف`,
        url: `/046.mp3`
    },
    {
        name: `سورة محمد`,
        url: `/047.mp3`
    },
    {
        name: `سورة الفتح`,
        url: `/048.mp3`
    },
    {
        name: `سورة الحجرات`,
        url: `/049.mp3`
    },
    {
        name: `سورة ق`,
        url: `/050.mp3`
    },
    {
        name: `سورة الذاريات`,
        url: `/051.mp3`
    },
    {
        name: `سورة الطور`,
        url: `/052.mp3`
    },
    {
        name: `سورة النجم`,
        url: `/053.mp3`
    },
    {
        name: `سورة القمر`,
        url: `/054.mp3`
    },
    {
        name: `سورة الرحمن`,
        url: `/055.mp3`
    },
    {
        name: `سورة الواقعة`,
        url: `/056.mp3`
    },
    {
        name: `سورة الحديد`,
        url: `/057.mp3`
    },
    {
        name: `سورة المجادلة`,
        url: `/058.mp3`
    },
    {
        name: `سورة الحشر`,
        url: `/059.mp3`
    },
    {
        name: `سورة الممتحنة`,
        url: `/060.mp3`
    },
    {
        name: `سورة الصف`,
        url: `/061.mp3`
    },
    {
        name: `سورة الجمعة`,
        url: `/062.mp3`
    },
    {
        name: `سورة المنافقون`,
        url: `/063.mp3`
    },
    {
        name: `سورة التغابن`,
        url: `/064.mp3`
    },
    {
        name: `سورة الطلاق`,
        url: `/065.mp3`
    },
    {
        name: `سورة التحريم`,
        url: `/066.mp3`
    },
    {
        name: `سورة الملك`,
        url: `/067.mp3`
    },
    {
        name: `سورة القلم`,
        url: `/068.mp3`
    },
    {
        name: `سورة الحاقة`,
        url: `/069.mp3`
    },
    {
        name: `سورة المعارج`,
        url: `/070.mp3`
    },
    {
        name: `سورة نوح`,
        url: `/071.mp3`
    },
    {
        name: `سورة الجن`,
        url: `/072.mp3`
    },
    {
        name: `سورة المزمل`,
        url: `/073.mp3`
    },
    {
        name: `سورة المدثر`,
        url: `/074.mp3`
    },
    {
        name: `سورة القيامة`,
        url: `/075.mp3`
    },
    {
        name: `سورة الإنسان`,
        url: `/076.mp3`
    },
    {
        name: `سورة المرسلات`,
        url: `/077.mp3`
    },
    {
        name: `سورة النبأ`,
        url: `/078.mp3`
    },
    {
        name: `سورة النازعات`,
        url: `/079.mp3`
    },
    {
        name: `سورة عبس`,
        url: `/080.mp3`
    },
    {
        name: `سورة التكوير`,
        url: `/081.mp3`
    },
    {
        name: `سورة الإنفطار`,
        url: `/082.mp3`
    },
    {
        name: `سورة المطففين`,
        url: `/083.mp3`
    },
    {
        name: `سورة الانشقاق`,
        url: `/084.mp3`
    },
    {
        name: `سورة البروج`,
        url: `/085.mp3`
    },
    {
        name: `سورة الطارق`,
        url: `/086.mp3`
    },
    {
        name: `سورة الأعلى`,
        url: `/087.mp3`
    },
    {
        name: `سورة الغاشية`,
        url: `/088.mp3`
    },
    {
        name: `سورة الفجر`,
        url: `/089.mp3`
    },
    {
        name: `سورة البلد`,
        url: `/090.mp3`
    },
    {
        name: `سورة الشمس`,
        url: `/091.mp3`
    },
    {
        name: `سورة الليل`,
        url: `/092.mp3`
    },
    {
        name: `سورة الضحى`,
        url: `/093.mp3`
    },
    {
        name: `سورة الشرح`,
        url: `/094.mp3`
    },
    {
        name: `سورة التين`,
        url: `/095.mp3`
    },
    {
        name: `سورة العلق`,
        url: `/096.mp3`
    },
    {
        name: `سورة القدر`,
        url: `/097.mp3`
    },
    {
        name: `سورة البينة`,
        url: `/098.mp3`
    },
    {
        name: `سورة الزلزلة`,
        url: `/099.mp3`
    },
    {
        name: `سورة العاديات`,
        url: `/100.mp3`
    },
    {
        name: `سورة التكاثر`,
        url: `/102.mp3`
    },
    {
        name: `سورة العصر`,
        url: `/103.mp3`
    }
    , {
        name: `سورة الهمزة`,
        url: `/104.mp3`
    }
    , {
        name: `سورة الفيل`,
        url: `/105.mp3`
    },
    {
        name: `سورة قريش`,
        url: `/106.mp3`
    }
    , {
        name: `سورة الماعون`,
        url: `/107.mp3`
    }
    , {
        name: `سورة الكوثر`,
        url: `/108.mp3`
    },
    {
        name: `سورة الكافرون`,
        url: `/109.mp3`
    }
    ,
    {
        name: `سورة النصر`,
        url: `/110.mp3`
    }
    ,
    {
        name: `سورة المسد`,
        url: `/111.mp3`
    }
    ,
    {
        name: `سورة الإخلاص`,
        url: `/112.mp3`
    }
    ,
    {
        name: `سورة الفلق`,
        url: `/113.mp3`
    }
    ,
    {
        name: `سورة الناس`,
        url: `/114.mp3`
    }
]

loadswrah(swrah_index, sheikh_index);

async function loadswrah(swrah_index, sheikh_index) {
    clearInterval(updateTimer);
    reset();

    curr_swrah.src = await (base_url + sheikhList[sheikh_index].name + swar[swrah_index].url);
    console.log(curr_swrah.src)
    curr_swrah.load();

    swrah_art.style.backgroundImage = `url('${sheikhList[sheikh_index].img}')`;


    updateTimer = setInterval(setUpdate, 1000);

    curr_swrah.addEventListener('ended', nextswrah);
}


function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomswrah() {
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
function repeatswrah() {
    let current_index = swrah_index;
    loadswrah(current_index);
    playswrah();
}
function playpauseswrah() {
    isPlaying ? pauseswrah() : playswrah();
}
function playswrah() {
    curr_swrah.play();
    isPlaying = true;
    swrah_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseswrah() {
    curr_swrah.pause();
    isPlaying = false;
    swrah_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextswrah() {
    if (swrah_index < swar.length - 1 && isRandom === false) {
        swrah_index += 1;
    } else if (swrah_index < swar.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * swar.length);
        swrah_index = random_index;
    } else {
        swrah_index = 0;
    }
    loadswrah(swrah_index, sheikh_index);
    playswrah();
}
function prevswrah() {
    if (swrah_index > 0) {
        swrah_index -= 1;
    } else {
        swrah_index = swar.length - 1;
    }
    loadswrah(swrah_index);
    playswrah();
}
function seekTo() {
    let seekto = curr_swrah.duration * (seek_slider.value / 100);
    curr_swrah.currentTime = seekto;
}
function setVolume() {
    curr_swrah.volume = volume_slider.value / 100;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_swrah.duration)) {
        seekPosition = curr_swrah.currentTime * (100 / curr_swrah.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_swrah.currentTime / 60);
        let currentSeconds = Math.floor(curr_swrah.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_swrah.duration / 60);
        let durationSeconds = Math.floor(curr_swrah.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}


function addSwarList() {
    select = document.getElementById('swarList');

    swar.forEach((value, index) => {
        var opt = document.createElement('option');
        opt.value = index;
        opt.innerHTML = value.name;
        select.appendChild(opt);
    })

}


$("#swarList").mouseup(function () {
    var open = $(this).data("isopen");
    if (open) {

        var e = document.getElementById("swarList");
        loadswrah(e.value, sheikh_index)
        console.log(e.value)
    }
    $(this).data("isopen", !open);
});
$("#sheikh").mouseup(function () {
    var open = $(this).data("isopen");
    if (open) {
        reset();
        var e = document.getElementById("sheikh");
        sheikh_index = e.value;
        loadswrah(swrah_index, sheikh_index)
    }
    $(this).data("isopen", !open);
});


$(window).on('load', function () {
    addSwarList();
});


$('.random-swrah').click(function () {
    randomswrah();
});
$('.playpause-swrah').click(function () {
    playpauseswrah();
});
$('.prev-swrah').click(function () {
    prevswrah();
});
$('.next-swrah').click(function () {
    nextswrah();
});
$('.repeat-swrah').click(function () {
    repeatswrah();
});
