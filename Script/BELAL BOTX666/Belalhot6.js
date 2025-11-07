module.exports.config = {
 name: "hot6",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "BELAL BOTX666",
 description: "hot video",
 commandCategory: "admin",
 usages: "horny vedio",
 cooldowns: 5,
 dependencies: {
 request: '',
 "fs-extra": '',
 axios: ''
 }
};

module.exports.run = async function({ api, event }) {
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
var videoLinks = [
"https://drive.google.com/uc?export=download&id=1hifnUhP2h6CvozIfGi7wHgM5ayrPoIXa",
      "https://drive.google.com/uc?export=download&id=1PS9hWE-f_sNmBgtdniQhVmtj-ByDVk5x",
      "https://drive.google.com/uc?export=download&id=1ggG47048qmqrZpgCN1ZV7jkjL8eI0n1A",
      "https://drive.google.com/uc?export=download&id=1zEuq1V1o5fgqpHbBfELEA22feV4NYsVI",
      "https://drive.google.com/uc?export=download&id=1a1dg4FcvJNQJIT8BwbxrdEbN7dBgC0s3",
      "https://drive.google.com/uc?export=download&id=1Fupdugkm2vLluKiiMtMLsiQmxnMXTMHq",
      "https://drive.google.com/uc?export=download&id=1CrI71iIILF6VlpBuNFjoKVGoxIw-ox7K",
      "https://drive.google.com/uc?export=download&id=1OKvjCIcEL39iHZGc7KnbJfZ6K5_B9HAT",
      "https://drive.google.com/uc?export=download&id=1ZBLYszC62I0cP20Ml8Ro0cuWgJH0Eigy",
      "https://drive.google.com/uc?export=download&id=177Plq4pVxQQi-XHPmQsmipANG7_wZiTL",
      "https://drive.google.com/uc?export=download&id=1n5I4Hwwz_jEP6I_2k7E9rIlso11Gu527",
      "https://drive.google.com/uc?export=download&id=1L3A18MO6M2fPox5aCCQuNROCvOl38br8",
      "https://drive.google.com/uc?export=download&id=1axgftswNPMYlHbMDe_ZY4AIfpqtztlUq",
      "https://drive.google.com/uc?export=download&id=1jWLrJ0hWQB1BEW2eGGJehYZ794Fhv99b",
      "https://drive.google.com/uc?export=download&id=1Le3bFXrmb6kiTyx2nxXGPThUEamOBVsm",
      "https://drive.google.com/uc?export=download&id=1DHq9BT7h2sgjj6eB06oq_qWDtSfkDlER",
      "https://drive.google.com/uc?export=download&id=1IkApBqhFEkXIX8p5T3XrhfF6-RQHOSHC",
      "https://drive.google.com/uc?export=download&id=1blfIGuqdSa80SZtz1SBug_gvM8TGK4oZ",
      "https://drive.google.com/uc?export=download&id=1daMM5cWNWnhquV-gRNKIizvrZz-xEeC1",
      "https://drive.google.com/uc?export=download&id=1irSxVAI6PXw3S5QDDQuiyF0OAUGiYjKn"
];
 

 const path = __dirname + "/cache/hotvideo.mp4";
 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

 request(encodeURI(randomLink))
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body: "(hot6) খা চুষে চুষে খা 🥵 ",
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};
