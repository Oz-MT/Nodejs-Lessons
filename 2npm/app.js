// console.log("selam");

// console.log(process.argv);
// console.log(process.argv[1]);
// console.log(process.argv[2]);

// "node app.js" diyerek çalıştırdığımızda bize bazı bilgiler verir.
// node app.js ekle --isim=emre diye çalıştırdığımızda, üst kısımdaki bilgilere eklemesini istediğimiz bilgileri ekler.
// Yani biz node app.js dedikten sonra istediğimiz bilgileri programımıza gönderebiliyoruz. Bunları ise process.argv olarak dahil edebiliyor.

// let gelenKomut = process.argv[2];

// if (gelenKomut === "ekle") {
//   console.log("ekleme yapılacak");
// }

// node app.js ekle komutu ile çalıştırıyoruz ve array'in 2. elemanı ekle olarak geldiği için clg içindeki yazdırıyor.

const { describe } = require("yargs");
const yargs = require("yargs");
yargs.version("1.5.3"); // Version umuzu bu şekilde güncelleyebiliriz ve "node app.js --version" ile çalıştırdığımızda güncellenmiştir.
yargs.command({
  command: "ekle",
  describe: "yeni kişi eklemeye yarar",
  handler(argv) {
    console.log("isim:" + argv.isim + " tel no:" + argv.tel);
  },
});
console.log(yargs.argv);

// node app.js ekle --isim="emre" --tel="5454454554" komutunu çalıştırık. Bize daha güzel bir şekilde derleme yaparak çıktı verdi.
// "node app.js --help" komutunu da kullanabiliriz.
