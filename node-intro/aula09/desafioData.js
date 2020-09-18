const moment = require('moment');
const {
    fns,
    differenceInDays,
    differenceInMonths
} = require('date-fns');

let dataAntiga = moment('2005-09-15');
let dataAtual = moment('2020-09-15');

let diasDeDiferenca = dataAtual.diff(dataAntiga, 'days');
let mesesDeDiferenca = dataAtual.diff(dataAntiga, 'months');
console.log('A diferença entre as datas é de: ' + diasDeDiferenca + ' dias e ' + mesesDeDiferenca + ' meses');

let dataAntigaFns = new Date(2005, 8, 15); // em Date o mês setembro é 8
let dataAtualFns = new Date(2020, 8, 15);

let diasDeDiferencaFns = differenceInDays(dataAtualFns, dataAntigaFns);
let mesesDeDiferencaFns = differenceInMonths(dataAtualFns, dataAntigaFns);
console.log('A diferença entre as datas é de: ' + diasDeDiferencaFns + ' dias e ' + mesesDeDiferencaFns + ' meses');