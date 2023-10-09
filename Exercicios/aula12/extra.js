agora = new Date()
diasem = agora.getMonth()
/*
00 = Janeiro
01 = Fevereiro
02 = Março
03 = Abril
04 = Maio
05 = Junho
06 = Julho
07 = Agosto
08 = Setembro
09 = Outubro
10 = Novembro
11 = Dezembro
*/
console.log(diasem);
switch (diasem) {
        case 0:
        console.log('Janeiro')
        break;
        case 1:
        console.log('Fevereiro')
        break;
        case 2:
        console.log('Março')
        break;
        case 3:
        console.log('Abril')
        break;
        case 4:
        console.log('Maio')
        break;
        case 5:
        console.log('Junho')
        break;
        case 6:
        console.log('Julho')
        break;
        case 7:
        console.log('Agosto')
        break;
        case 8:
        console.log('Setembro')
        break;
        case 9:
        console.log('Outubro')
        break;
        case 10:
        console.log('Novembro')
        break;
        case 11:
        console.log('Dezembro')
        break;

    default:
        console.log('[ERRO] Mês inválido')
        break;
}