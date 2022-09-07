const os = require("os");

// console.log(os.freemem()); // Bize byte cinsinden bir değer döndürdü, bunu GB'a çevirmek için aşağıda function yazdık.

// const btyeToGb = (toplamByte) => {
//   return (toplamByte / 1024 / 1024 / 1024).toFixed(2);
// };

// let freeRam = btyeToGb(os.freemem());
// let totalRam = btyeToGb(os.totalmem());
// let usedRam = totalRam - freeRam;

// let cpuSayisi = os.cpus().length;

// const pcInfo = () => {
//   return `toplam ram:${totalRam}, kullanılan ram:${usedRam}, free ram:${freeRam}, cpu sayısı:${cpuSayisi}`;
// };

// console.log(pcInfo());

//* --------------------   2. bölüm   ---------------------

// const fs = require("fs");
// fs.writeFile("pc-info.txt", pcInfo(), (err) => {
//   if (err) console.log("dosyaya yazarken hata oluştu");
// });

//* --------------------   3. bölüm   ---------------------

let pcInfoExport = () => {
  const btyeToGb = (toplamByte) => {
    return (toplamByte / 1024 / 1024 / 1024).toFixed(2);
  };

  let freeRam = btyeToGb(os.freemem());
  let totalRam = btyeToGb(os.totalmem());
  let usedRam = totalRam - freeRam;
  let cpuSayisi = os.cpus().length;

  const pcInfo = () => {
    return `toplam ram:${totalRam}, kullanılan ram:${usedRam}, free ram:${freeRam}, cpu sayısı:${cpuSayisi}`;
  };

  const fs = require("fs");
  fs.writeFile("pc-info.txt", pcInfo(), (err) => {
    if (err) console.log("dosyaya yazarken hata oluştu");
  });
};

exports.pcInfoExport = pcInfoExport; // first-app.js dosyasından erişebilmek için yaptık bunu. module.exports'da diyebilirdik ama demesek de fark etmez.
