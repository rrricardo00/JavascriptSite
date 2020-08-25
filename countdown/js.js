import Countdown from './modules/countdown.js';

const diasParaNatal = new Countdown('24 December 2020 23:59:59 GMT-0300');
const diasParaAnoNovo = new Countdown('31 December 2020 23:59:59 GMT-0300');
// console.log(diasParaNatal.total);
// console.log(diasParaAnoNovo.total);
setInterval(() => {
    console.log(diasParaNatal.total);
}, 1000)