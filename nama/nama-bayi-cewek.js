document.getElementById('submit').addEventListener('click', getName);

function getName() {
    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var prefixes = ["Anindita (Jawa: Seorang yang tanpa kekurangan dan tanpa cacat)","Keisha (Putri)","Zahra (Arab: Nama Salah Satu Putri Rasulullah)","Anindya (Jawa: Sempurna)","Fauziah (Arab: Kemenangan)","Aniq (Arab: Cantik dan mungil)","Cahya Dewi (Jawa: Wanita yang bersinar)","Adiba (Beradab, berpengetahuan)","Shakila (Cantik rupawan)","Atmarini (Ketajaman hidup)","Ainuha (Matanya)","Suraiya (Bintang)","Aisha (Nama istri Nabi Muhammad)","Syifa (Obat)","Alina, Aalina (Sansekerta: Terang, Arab: Mulia)","Faiha (Arab: Banyak kelebihan)","Aila (Keteguhan, kebijaksanaan, pengaruh dan kekuasaan) ","Abqariah (Berilmu, cerdas)","Asilah (Halus budi pekerti)","Saidah (Kebahagiaan)","Ufairah (Berani)","Adila (Pantas, tepat, adil)","Nisa (Perempuan)","Ardani (Suci)","Anisah (Ramah dalam pergaulan, teman)","Abidah (Tekun beribadah)","Adawiyah (nama tokoh sufi)","Afsheen (Arab: Bersinar seperti bintang di langit)","Adeeva, Adiva (Arab: Menyenangkan, sedap, lemah lembut; Hebrew: Sopan santun, baik budi)","Myesha, Myisha, Myeisha, Myeshia, Myiesha, Myeasha, Mysha (Karunia kehidupan; Arab: Lincah, bersemangat, seperti wanita)","Shakila (Cantik rupawan)","Atmarini (Ketajaman hidup)","Adira, Adirah, Adeera, Adyra, Adeerah, Adyrah, Adeira, Adeirah, Adiera (Arab/Hebrew: Seorang mulia yang memiliki kekuatan besar)","Azzahra (Sangat baik & cerdas)","Adonia (Cantik)","Najma (Bintang)","Orlin (Berkilau keemasan)","Hayatul (Hidup)","Hikam (Bijaksana, adil)","Adresia (Tanda, fenomena)","Afanin (Daun yang lembut)","Huriyah (Bidadari surga)","Huwaida (lemah lembut)","Afifa, Afifah (Arab: Suci, murni, yang mensucikan diri, yang baik)","Nahda (Mulia)","Rafanda/Rafa (Wanita santun; Arab: Makmur, kaya, senang, keberuntungan, kebahagiaan, kemakmuran)","Fitri (Yang sebenarnya, yang sesungguhnya)","Afiyah (Sehat, segar)","Salimah (Selamat, damai)","Afnan (Pohon yang berbuah)","Faizah (Kemenangan)","Afrah (Kegembiraan, kesenangan)","Aliyah (Tinggi)","Ahlam (Cita-cita, impian)","Athiyah (Anugerah, karunia)","Maimanah (Memberi berkah, anugerah, karunia)","Alda (Keberunrungan)","Rahsetia (Patuh, setia)","Islami (Selamat)","Aidah (kembali berhari raya)","Salimah (Selamat, damai)","Ainayya (Mata yang indah)","Fathiyya, Fathiya (Arab: Kemenangan, kegembiraan, kebahagiaan)","Alifah (ramah tamah)","Ayudia (Cantik, Rendah hati)","Inara (Berkharisma, pintar)","Nuha (Arab: Intelek, pikiran)","Zahira /Zahir (Arab: Yang cantik berseri)","Afiqa (Sangat berpengetahuan, cerdas)","Silmi (Selamat)","Akifa (Wanita yang raji beritikaf di masjid)","Naila (Anugerah)","Nailah (Suka memberi)","Akifah (Rajin beritikaf)","Hasna (Cantik)","Kamila (Sempurna)","Alayya/Alayyah (Arab: Yang berderajat luhur)","Alesha (Beruntung; Arab: Selalu di lindungi Allah)","Zahra (Bunga mawar)","Alifa (Anak pertama)","Hibatillah (Arab: Anugrah dari Allah)","Naufalyn (Dermawan)","Fikria (Berpikir/cerdas)","Rabbani (Berdzikir)","Alfa (Seribu)","Kamala (Kesempurnaan)","Basyirah (Penyampai kabar gembira)"],
        affixes = ["Burairah (Perilaku baik)","Alika, Alikha, Alikah, Alesa (Kebahagiaan, kehormatan & pernikahan, kecantikan; Hawai: Bangsawan; Afrika: yang tercantik)","Naila (Kesuksesan)","Alilatul (Memakai wewangian)","Alita (Mulia)","Bari’ah (Cantik)","Watsiqah (Percaya diri)","Saifanah (Pedang)","Nabila (Arab: Keturunan bangsawan)","Zahra, Zahrah, Zahraa, Zahre, Zahreh, Zahara, Zaharra, Zahera, Zahira (Arab: bunga yang sedang mekar)","Farzana (Bijak, pandai)","Alya (Tinggi)","Azizah (Mulia, perkasa)","Maryam, Siti Maryam (Wanita yang tegar dan tabah, salah satu dari dua wanita yang dijamin masuk surga)","Fitriyah (Suci, murni)","Amani (Cita-cita, keinginan)","Ahsanul (Lebih baik)","Yusriyah (Dimudahkan)","Qatrunnada (Arab: Tetesan embun)","Aminah (Dapat dipercaya, aman)","Afifah (Memiliki harga diri)","Amirah (Pemimpin, ratu)","Athiyah (Anugerah)","Fahriyah (Kebanggaan)","Anbari (Wangi-wangian)","Hasanah (Kebaikan)","Anisa (Arab: Perempuan)","Hayfa (Rupawan)","Ramadhani (lahir di bulan Ramadhan)","Ufairah (Arab: Pemberani)","Ayu (Jawa: Cantik)","Faiha (Banyak kelebihan)","Naim (Surga Naim)","Widyawati (Banyak ilmunya dan cantik)","Aqra (Membaca)","Nabiha (Situasi)","Ariqah (Baik budi; mulia asalnya)","Fatinah (Menarik hati)","Mahmudah (Terpuji)","Asilah (Gemulai, halus)","Fadiyah (Menyelamatkan, tebusan)","Havika (Hawai: Terkasih)","Asla (Gemulai, halus)","Asma (Menyuarakan lantang, lebih nyaring)","Athirah (Harum baunya)","Badi’ah (Indah, bagus)","Atika (Pemurah)","Balqis (Ratu)","Zahra (Berseri-seri)","Ratifa (Berakhlak baik)","Marhamah (Penyayang)","Aufa (Setia)","Ahimsa (Kedamaian)","Ardhani (Suci)","Rudainah (Kasih sayang)","Ayduha (Kedua tangannya)","Aysha (Wanita soleha & terhormat)","Ailani (Pemimpin yang bijaksana)","Arka (Cahaya matahari)","Azalea (Yunani: Bunga, anggun; Arab: Demokrasi)","Khaliqa (Arab: Ciptaan Allah)","Dzahin (Cerdik dan pandai)","Azhariah (Bunga-bunga)","Nur (Cahaya, sinar)","Azka (Arab: Lebih bersih, lebih sempurna)","Syandana (Sansekerta: Mengalir terus)","Rahman (Arab: Kebaikan)","Badrina (Bulan kami)","Mufidah (Bermanfaat)","Badriyah (Bulan purnama)","Sadidah (Tepat sasaran, benar)","Majidah (Mulia)","Bahiyah (Cermelang, gemilang)","Bahjah (Kesenangan, keindahan)","Badiah (Abadi; kekal)","Baitah (Arab: rumah yang indah)","Safinatunnajah (Arab: kapal penyelamat)","Munirah (Bersinar; bercahaya)"],
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