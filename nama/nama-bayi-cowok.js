document.getElementById('submit').addEventListener('click', getName);

function getName() {
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var prefixes = ["Abid (Ahli Ibadah)","Pranaja (Anak laki-laki)", "Abinaya (Semangat)", "Alexi (Penjaga, pejuang, pelindung)", "Abinaya (Semangat)", "Basupati (Tak takut mati)", "Abqari (Genius, pintar)", "Agam (Kuat)", "Agler (Terkenal mulia)", "Abraham (Ayah semua orang) ", "Achilles (Kekuatan)", "Azka (Bersih, suci)", "Aldric (Bijaksana)", "Aaron (Cahaya gunung yang tinngi)", "Blenda (Penuh kemegahan)", "Abdul (Hamba Allah)", "Rahman (Ar-Rahman : Yang Maha Pengasih)", "Hafiz (Yang terpelihara)", "Abdullah (Hamba Allah)", "Abid (Beribadah)", "Pratama (Anak Pertama)", "Reynand (Bijaksana, besar, berani, kuat)", "Abrisam (Ketampanan, kelembutan)", "Abyan (Bisa menjelaskan secara jelas)", "Nandana (Anak laki-laki)", "Achazia (Raja)", "Brigit (Kekuatan)", "Aharon (Agung dan mulia)", "Ahmad (Terpercaya, jujur, nama kecil nabi Muhammad S.A.W.)", "Adam (yang pertama di bumi)", "Albert (mulia, cemerlang)", "Adrian (pemberani)", "Nurwahid (Cahaya utama, pertama)", "Poldi (Orang yang sangat berani)", "Emery (Pemimpin yang baik hati)", "Adelardo (Pangeran)", "Cetta (Berpengetahuan luas)", "Radmilo (Bekerja untuk rakyat)"],
        affixes = ["Zahidin (Orang-orang yang zuhud, rendah hati, sungguh-sungguh beribadah)","Abrar (Berbuat kebajikan)","Arsenio (Gagah berani)","Runako (Tampan)","Azhim (Yang Maha Agung)","Abidun (Beribadah)","Abyan (Yangg menjelaskan dengan gamblang)","Fadhil (Mulia)","Aqila (Yang berakal)","Rasyiqul (Gagah, kekar, kuat)","Rafif (berbudi pekerti baik, bagus)","Muinul (Membantu, menolong)","Wahid (Yang Maha Esa, Tunggal)","Wafi (Sempurna)","Khair (Paling, sangat baik)","Karim (Yang Maha Mulia)","Syamil (Menyeluruh)","Ghani (Yang Maha Karya)","Halim (Halus; lembut)","Ariqin (Berakhlak baik)","Farid (Yang istimewa)","Ahwas (Pemberani)","Hadi (Yang Maha Petunjuk)","Ahsan (Yang terbaik)","Shalihin (Orang yang shaleh)","Ahnafus (Sangat lempeng, lurus dalam beragama)","Justin (Adil)","Nabhan (Kemuliaan)","Nailun (Memperoleh, mendapat)","Purnama (Rembulan)","Atma (Jiwa)","Afnan (Mekar berseri)","Siddik (Yang membenarkan)","Ar Rafif (Berakhlak mulia)","Adyatma (Anugerah hidup)","Afdhal (Terbaik, lebih utama)","Gilang (Bercahaya terang)","Aditya (Di ridhai)","Affan (Pandai, cerdas)","Arsalan (Singa)","Baqir (Berilmu, berpengetahuan)","Nandana (Jawa: Anak laki-laki)","Surya (India, Indonesia, Jawa: Matahari)","Azzam (Berkemauan baik dan mulia)","Rafli (Perasaan pada keadilan, Berkah Tuhan, Kecintaan dan kebahagiaan, Berhasil dengan baik, cerdas dan beruntung, Pekerjaan yang sempurna)","Sakha (Berkah Tuhan, Berhasil dengan baik, cerdas dan beruntung)","Arkan, Arkaan (Mulia, kemuliaan, Ahli pujangga)","Wiratama/Perwira (Indonesia: Prajurit + Utama : yang terpenting, yg memiliki keutamaan)","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",],
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