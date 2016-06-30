document.getElementById('submit').addEventListener('click', getName);

function getName() {
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var prefixes = ["Anindita (Jawa: Seorang yang tanpa kekurangan dan tanpa cacat)","Keisha (Putri)","Zahra (Arab: Nama Salah Satu Putri Rasulullah)","Anindya (Jawa: Sempurna)","Fauziah (Arab: Kemenangan)","Aniq (Arab: Cantik dan mungil)","Cahya Dewi (Jawa: Wanita yang bersinar)","Adiba (Beradab, berpengetahuan)","Shakila (Cantik rupawan)","Atmarini (Ketajaman hidup)","Ainuha (Matanya)","Suraiya (Bintang)","Aisha (Nama istri Nabi Muhammad)","Syifa (Obat)","Alina, Aalina (Sansekerta: Terang, Arab: Mulia)","Faiha (Arab: Banyak kelebihan)","Aila (Keteguhan, kebijaksanaan, pengaruh dan kekuasaan) ","Abqariah (Berilmu, cerdas)","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
        affixes = ["data dedang diinput",],
        randomise = randomNumber(3, 0),
        randyP = randomNumber(prefixes.length, 0),
        randyA = randomNumber(affixes.length, 0),
        randomPrefix = prefixes[randyP],
        randomAffix = affixes[randyA],
        fonts = ["'sansationbold'"],
        name = document.getElementById('userName').value,
        beerName;
  
    if(name.length >= 1){
    if (randomise === 0) {
        beerName = randomPrefix + name;
    } else if (randomise === 1) {
        beerName = name + randomAffix;
    } else {
        beerName = randomPrefix + name + randomAffix;
    } 
    document.getElementById("title").style.fontFamily = fonts[randomNumber(fonts.length, 0)];
    document.getElementById('title').innerHTML = beerName;
    } else {
      alert("Enter your name first!");
    }

   
}

var $button = document.querySelector('.button');
$button.addEventListener('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to($button, duration, {
        scaleY: 1.6,
        ease: Expo.easeOut
    });
    TweenMax.to($button, duration, {
        scaleX: 1.2,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [3],
        delay: delay
    });
    TweenMax.to($button, duration * 1.25, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [6],
        delay: delay * 3
    });
});