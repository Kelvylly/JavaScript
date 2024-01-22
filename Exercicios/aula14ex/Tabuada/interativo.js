function tabuada() {
    let numb = document.getElementById('numero')
    let tab = document.getElementById('resultado')

    if (numb.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } 
    else {
        let n = Number(numb.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++

        }
    }
}