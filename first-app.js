function selamVer() {
  console.log("Merhaba Node JS");
  //   console.log(window);
  global.console.log("Bu yazı global nesnesinden geldi");
}

selamVer();

//! Terminal--> New Terminal-->powershell içinde: "node .\first-app.js" yazdık. Böylece borwser dışında bir ortamda (bu server da olabilirdi) çalışabiliyor.

//! window nesnesi browser'da tanımlıdır fakat browser dışında tanımlı değildir. Hata alırız.
