// JS'de bazı yapılara direk erişerek kullanabiliriz. Bunlara global objects denir.
// console, setTimeout, clearTimeout, setInterval, clearInterval gibi...

// Browser'daki js'de tüm değişkenleri, fonksiyonları, ekranı barındıran window isimli global bir nesnemiz vardı. window.console_log
// Bu yapının node'da bir tanımı yoktur, karşılığı ise global'dir.

// node js uygulamalarında her bir js dosyası bir module'dür. Bu module tanımlanan tüm değişken ve fonksiyonlar bu dosyaya özeldir.(private)
// Bunlara diğer module'ler üzerinden erişebilmenin yöntemleri vardır.

let isim = "emre";
let topla = function (a, b) {
  console.log(a + b);
};

console.log(module);
