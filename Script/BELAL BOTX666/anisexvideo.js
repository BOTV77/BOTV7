/** Don't change credits bro i will fix¯\_(ツ)_/¯ **/
module.exports.config = {
 name: "anisexvideo",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "BELAL BOTX666",
 description: "SAD VEDIO",
 commandCategory: "video",
 usages: "sad vedio",
 cooldowns: 5,
 dependencies: {
 "request":"",
 "fs-extra":"",
 "axios":""
 }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
 var hi = ["anime sex video] \n┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄"];
 var know = hi[Math.floor(Math.random() * hi.length)];
 var link = [ 
"https://drive.google.com/uc?export=download&id=1cExHbbrdCPuRuvDqvQd5Tp3LBkFoHQ2b",
"https://drive.google.com/uc?export=download&id=1I43i6FTaGKuDbBKzJL22Tj6KZdjB5Y_J",
"https://drive.google.com/uc?export=download&id=1Xi9CIRml3wSlLvmzgApf3CqxS-oyGTPn",
"https://drive.google.com/uc?export=download&id=1AjapXizIRbyIyT1fp41FgtuAs-2VJQH3",
"https://drive.google.com/uc?export=download&id=1veFAfnmOl0WDo58XYim9y-XxNYdVdx2_",
"https://drive.google.com/uc?export=download&id=1o3PO9_dmDJqBS1-COyPrgaVC774n6Mt7",
"https://drive.google.com/uc?export=download&id=1GwEUBco7oKoQX1i80sjtc73nUp5W0xmA",
"https://drive.google.com/uc?export=download&id=1BCQ4u7p3IDFX6LNjk6Jp7yL_zly3driR",
"https://drive.google.com/uc?export=download&id=1xf-VofGdEMqDo_zufgBUa4sB05xPOj4P",
"https://drive.google.com/uc?export=download&id=1DLkwe9HYuWpa3omYdP-lujwFCeN0K41C",
"https://drive.google.com/uc?export=download&id=1sxQb0fXOkKHTDQTdNk3UnI4M0QxFKrnJ",
"https://drive.google.com/uc?export=download&id=1vOkH2QVSZnrLRfj9z9WxwSYS8W1MSwWb",
"https://drive.google.com/uc?export=download&id=1p9hv3MAUKWaj1UCVcAUvG2PG0_2FfUdz",
"https://drive.google.com/uc?export=download&id=1RdQFUxkfSAmj4UTMGMlX7knvdaDmdn2B",
"https://drive.google.com/uc?export=download&id=1VcFoep19QmDXesjjq3SxCKniSfSyh9tF",
"https://drive.google.com/uc?export=download&id=1zMgG8Y5wpaHOHKfdVrRX5x0HA_z6EtDS",
"https://drive.google.com/uc?export=download&id=1WxTLDcgcRed0pWhpsEemB95cLVYmGO1l",
"https://drive.google.com/uc?export=download&id=1yTx7oQcwHPd2QIPfXOCWQrCZBj87e2DT",
"https://drive.google.com/uc?export=download&id=1lBofNfUgk0HqIBszv_qaJV6tV-jLT3l9",
"https://drive.google.com/uc?export=download&id=1XmzOLEuKfOxsomfVTGEoYjAtzsstj9aQ",
"https://drive.google.com/uc?export=download&id=1lE8535LiuOxaA9TcZJh8EtHBn8n7csn5",
"https://drive.google.com/uc?export=download&id=1Eoz0gGffOwnUzgbXv-a8Mir8GDG3Ukxs",
"https://drive.google.com/uc?export=download&id=1QZYkHSGUTOu-L0O9dcYzhYJFq2Tl6klU",
"https://drive.google.com/uc?export=download&id=1wVC8rB0e8vDUr6jJQGgaVGXx5MH48s_z",
"https://drive.google.com/uc?export=download&id=1Dbmrj_mXYOlx__350EVXH_PYHRwFLXqJ",
"https://drive.google.com/uc?export=download&id=1Nfnin8KL-tXdVdpXi7I_HjSb871pj58d",
"https://drive.google.com/uc?export=download&id=140rAbCXEhn0rQTtFXEl0SmLTHbvaHEki",
"https://drive.google.com/uc?export=download&id=1uybDWHC30c9BwzeLUcnUsiDxrEpWK2cr",
"https://drive.google.com/uc?export=download&id=1ZRBFHQZDmaDLMMOCu5CozlGb1XXDrp5W",
"https://drive.google.com/uc?export=download&id=1w-KANdOGVAUerV8PvDPn743dS5xN0TvX",
"https://drive.google.com/uc?export=download&id=19Ajp5hltb4cnuPSbGzz7dyEZATYy4KcJ",
"https://drive.google.com/uc?export=download&id=17EPabLMAVk4dxotm7h7ylMaJnqLeMfhr",
"https://drive.google.com/uc?export=download&id=1FkwcLVwO4-e4wrPZh-7BbrVHqIgKP7b5"
];
 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4")); 
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
 };
