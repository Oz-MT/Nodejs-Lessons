const path = require("path"); // Nodejs ile birlikte gelen bir module'ü kullanmak istediğimiz ./ kullanmıyoruz.
const fs = require("fs");

const pathObject = path.parse(__dirname); // nodejs ile birlikte gelen 2 değerimiz var; filename ve dirname. dirname; o an çalışan dosyanın tam yolunu verirken filename ise o an çalışan dosya adını verir.

console.log(pathObject);
console.log(pathObject.dir);

fs.readdir("./", { withFileTypes: true }, function (err, files) {
  if (err) console.log("hata çıktı" + err);
  console.log(files);
  console.log(files[0].isFile()); // 0. indeksteki dosya dosya mı diye sorduk ve true döndü
  console.log(files[0].isDirectory()); // 0. indeksteki dosya klasör mü diye sorduk ve false döndü
});

// ilk verdiğimiz değeri dokümanda da olduğu gibi string olarak tanımlıyoruz ve nodejs lessons klasörün içini bana oku diyoruz.
