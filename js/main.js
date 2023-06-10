const ism = prompt("Isminggizni kiriting");
const yosh = +prompt("Yozshiggizni kiriting");

let birinchiHarf = ism.charAt().toUpperCase();
let davomi = ism.slice(1).toLowerCase();
let toliqIsm = birinchiHarf + davomi;
let tugulganYil = 2022 - yosh;
let oy = yosh * 12;
let hafta = ((yosh * 365) / 7).toFixed(0);
let kun = yosh * 365;
let soat = kun * 24;
let daqiqa = soat * 60;
let soniya = daqiqa * 60;

const result = `Qadrli ${toliqIsm}. Siz ${tugulganYil} yilda tug'ilgansiz. Va siz ${oy} oy, ${hafta} hafta,${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz. 😁`;

alert(result);
