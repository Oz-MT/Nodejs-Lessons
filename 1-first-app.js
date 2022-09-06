const myModule = require("./2-module-nedir"); // Buna erişirken sonuna js de desek olur demesek de. Başka bir module'e bağlantıyı sağlıyor. import etmek gibi düşübiliriz require'ı.

function selamVer() {
  console.log("Merhaba Node JS");
  //   console.log(window);
  global.console.log("Bu yazı global nesnesinden geldi");
}

selamVer();
console.log(myModule.ad);
myModule.ekle(5, 10);
myModule.cikar(52, 42);
console.log(myModule.personel);
console.log(myModule.personel.yas);

//? module-nedir.js dosyasından hiçbir şey export etmeden doğrudan başka bir dosyada değişkeni çağıramayız, hata verir.
//? Haberdar edebilmek için bazı yöntemlerimiz vardır.

//! Terminal--> New Terminal-->powershell içinde: "node .\first-app.js" yazdık. Böylece borwser dışında bir ortamda (bu server da olabilirdi) çalışabiliyor.

//! window nesnesi browser'da tanımlıdır fakat browser dışında tanımlı değildir. Hata alırız.

//! window yerine global kullanabiliriz ve console.log ile elde ettiğimiz sonucun aynısını alabiliriz.

//! Eğer require kısmında let ile tanımlasaydık farkında olmadan farklı bir değer atayabilirdik. Bu yüzden sabit olan const'atarız.
