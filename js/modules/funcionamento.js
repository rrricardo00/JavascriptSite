export default function funcionamento() {
    const funcinamento = document.querySelector('[data-semana]');
    const diaSemana = funcinamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcinamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const semanaAberta = diaSemana.indexOf(diaAgora) !== -1;


    if (semanaAberta && horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]) {
        funcinamento.classList.add('aberto');
    }
}


// console.log(semanaAberta)
// console.log(diaSemana)
// console.log(horarioSemana)
// console.log(diaAgora)
// console.log(horarioAgora)




//AULA  timeStamp
//------------------------------------------------------------
// const agora = new Date();
// const futuro = new Date('Dec 17 2020')
// console.log(agora.getMonth())
// console.log(futuro)


// function transformar(tempo) {
//     return Math.floor(tempo / (24 * 60 * 60 * 1000));
// }

// const a = agora.getTime()
// const b = futuro.getTime()
// const c= b-a;
// console.log(transformar(c))
//------------------------------------------------------------

