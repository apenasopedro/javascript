function gerar() {
    let num = document.getElementById (`txttab`)
    let tab = document.getElementById (`seltab`)
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ``
    while (c <= 10) {
        let item = document.createElement(`option`)
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }


}