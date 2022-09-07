//*---------------------Npm Nedir ve Nasıl Kullanılır-------------------------

// nodejs.org içinde var olan paketlerden farklı bir paket kullanmak istiyor isek ve kendimizde sıfırdan yazmak istemiyorsak o zaman hem internette npm for nodejs diyerek hem de npmjs.com web sitesinde aradığımız paketi bulabiliriz. npmjs.com web sitesi node js paket yöneticisidir. İlk bakmamız gereken yer de burasıdır. Üzerinde çok fazla paket vardır hali hazırda.

// nodejs i kurduğumuzda npm 'de yüklü olarak gelir. Bunu da cmd üzerinde npm -v diyerek kontrol edebiliriz.

// Örnek olarak express paketini kurup kullanmak istiyoruz ve bu kapsamda npmjs.com 'da express'i arattık.
// Bunu kullanabilmemiz için öncelikle kurmamız gerekmekte. Herhangi bir paket kullanmadan önce ilk çalıştırmamız gereken komut "npm init" komutudur. Bunu da ilgili dosya üzerinden terminal açarak gerçekleştiriyoruz.

//  npm init --> npm kullanmamız için package.json yapısını oluşturur. Aynı işlemi "npm init --yes" ile de tüm sorulara default cevaplar verilirek yapabiliriz.

// Bu işlemlerden sonra ilgili paketlerin kurulumuna geçebiliriz.

// Express özelinde ilgili dosyasını incelediğimizde "npm i express" olarak kurabileceğimiz belirtilmekte.

// npm i veya install -g npm@6.14.4 --> global olarak npm yi ilgili sürüm olarak yükler.

//*---------------------Semantic Versiyon Nedir ve Modül Detaylarını Görmek-----------------------

// npm list dersek eklediğimiz paketleri ve alt kırılımlarını görürüz.
// npm list --depth=0 dersek alt kırılımlarını göstermeden sadece ilgili paketleri gösterir. Detay yer almaz.
// npm list --depth=1 dersek bu seferde 1 kademe detayını görürüz.

// npm view mongoose diyerek paketin ismini yazdığımızda, ilgili pakete ait detayları görebiliriz.
// Ya da npm view mongoose dependencies dediğimizde dependencies lerini görebiliriz. Ayrıca bunu node_modules klasörü içinden de görebiliriz ilgili alt klasöre giderek.
// npm view mongoose versions dediğimizde de şimdiye kadarki tüm versiyonlarını görebiliriz. Eğer eski bir versionu kullanmak istiyorsak bu durumda npm i mongoose@6.1.8 diyerek ilgili versiyona gidebiliriz.

// "express": "^4.18.1", // Major, Minor, Patch
// "mongoose": "^6.5.4",
// "underscore": "^1.13.4"

//*---------------------Modullerin Silinmesi ve Update Edilmesi-----------------------

// "npm help i" dediğimizde ayrıntılı bir doküman üzerinden incelemeler yapabiliriz.

// "underscore": "^1.13.4" 'un en güncel versiyonu budur ama biz daha eski bir sürümünü yüklemek istiyoruz diyelim; örneğin 1.1.7 olsun.
// Bu kapsamda "npm i underscore@1.1.7" yazarak enter diyebiliriz. Sonrasında ise tüm mevcut ve güncel sürümlerini görebilmek için aşağıdaki komutlar ile devam edebiliriz.

// "npm outdated" ile güncelliğini yitirmiş paketler, mevcut ve güncel sürümleri hakkında bilgi verir. ^ (kerıt işareti) minor ve patch olarak en yüksek sürümü hedefler.
// ~ (tilda) ise patch'deki en yüksek sürümü hedefler.

// npm update dediğimizde minor olarak en güncel sürüme update eder. Major olarak güncellemez. Major olarak yapabilmek için "npm outdated" diyerek son versiyonunu görerek "npm i express@4.17.1" en güncel versiyonuna güncelleyebiliriz.

// Bir paketi silmek istediğimizde ise; "npm uninstall underscore" diyerek bu işlemi gerçekleştirebiliriz.

//*---------------------Developer Modülleri ve Nodemon Global Modülü-----------------------

// Development dependencies ler, uygulamamızın çalışmasında gerekli olmasada uygulamamızı daha güzel bir hale getirebilmemiz, testler yazabilmemiz için kullanacağımız paketlerdir. Bunların kurulumları da yukarıdaki gördüğümüz kurulumlara benzemektedir bir kaç ufak detay haricinde.

// Mesela ESLint paketi (Bizim yazdığımız kodları belli standartlara göre kontrol ediyor) üzerinden ilerlediğimizi düşünelim.
// Kurulumu için ise; "npm install eslint --save-dev" ya da "npm install eslint -D" diyerek çalıştırıyoruz.
// Yine aynı şekilde node modules altına ilgili dosyaları yüklenecek ama tek bir fark ile; package json içinde "devDependencies" bölümü altında yer alacak.
// "npm un eslint" ya da "npm uninstall eslint" ile silebiliriz.

// Bütün uygulamalarda bir paket kullanmak istiyorsak yani global bir paket yüklemek istiyorsak bu durumda; npm install -g nodemon ile ilgili paketi yükleyebiliriz. Böylece, bu nodemon paketi sadece bu uygulamada değil bundan sonra oluşturacağımız her node.js uygulamasında global olarak erişebilerek kullanabiliriz.
// Global olduğu için package.json'a da yüklenmedi.
// nodemon diyerek çalıştırabiliriz.

// Normalde "node .\npm-komutları.js" diyerek çalıştırırız ama her kaydettiğimizde çalışabilmesi, tekrar tekrar bu komutu yazmamak için nodemon ile "nodemon npm-komutları.js" diyerek bir kere çalıştırmamız yeterlidir (Hangi module'de çalışsın istiyorsak onu yazıyoruz tabi). Global bir paket olduğu için farklı nodejs uygulamalarında da kullanabiliriz.
// nodemon gibi global paketleri durdurmak için ctrl + c yazıyoruz.

// global paketleri kaldırmak için; npm uninstall -g <package-name> kullanırız.

console.log("merhaba ben muhsin");

//?---------------------Ödev ve Yapılacak Uygulamanın Anlatılması-----------------------

// Var olan tüm paketleri <nodemon dahil> siliniz.
// yargs 15.3.1 ve chalk 4.0.0 versiyonu ile modulleri kurunuz. Fikir edinmek için dokümantasyonuna bakınız.
// app.js dosyası oluşturup nodemon ile başlatınız.
