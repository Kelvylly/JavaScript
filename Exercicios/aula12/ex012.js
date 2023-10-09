agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao ${hora} horas`)
if(hora <= 12){
    console.log('Bom Dia');
} else {
    if(hora <= 17){
    console.log('Boa Tarde');
    } else{
        if(hora <= 24){
            console.log('Boa noite');
        }else{
            if(hora <= 5){
                console.log('Boa madrugada');
            }else{
    
            }
        }
    }
}