document.getElementById('submit').addEventListener('click', getName);

function getName() {
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var prefixes = ["Abid (Ahli Ibadah)","Pranaja (Anak laki-laki)","Pranaja (Anak laki-laki)", "Abinaya (Semangat)", "Alexi (Penjaga, pejuang, pelindung)", "Abinaya (Semangat)", "Basupati (Tak takut mati)", "Abqari (Genius, pintar)", "Agam (Kuat)", "Agler (Terkenal mulia)", "Abraham (Ayah semua orang) ", "Achilles (Kekuatan)", "Azka (Bersih, suci)", "Aldric (Bijaksana)", "Aaron (Cahaya gunung yang tinngi)", "Blenda (Penuh kemegahan)", "Abdul (Hamba Allah)", "Rahman (Ar-Rahman : Yang Maha Pengasih)", "Hafiz (Yang terpelihara)", "Abdullah (Hamba Allah)", "Abid (Beribadah)", "Pratama (Anak Pertama)", "Reynand (Bijaksana, besar, berani, kuat)"],
        affixes = ["Abrisam (Ketampanan, kelembutan)", "Abyan (Bisa menjelaskan secara jelas)", "Nandana (Anak laki-laki)", "Achazia (Raja)", "Brigit (Kekuatan)", "Aharon (Agung dan mulia)", "Ahmad (Terpercaya, jujur, nama kecil nabi Muhammad S.A.W.)", "Adam (yang pertama di bumi)", "Albert (mulia, cemerlang)", "Adrian (pemberani)", "Nurwahid (Cahaya utama, pertama)", "Poldi (Orang yang sangat berani)", "Emery (Pemimpin yang baik hati)", "Adelardo (Pangeran)", "Cetta (Berpengetahuan luas)", "Early ()", "Radmilo (Bekerja untuk rakyat)"],
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