let num = document.querySelector(`input#txtnumber`)
let lista = document.querySelector(`select#txttab`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function InLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !InLista (num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=``

    }else{
        window.alert (`Valor Inválido ou já encontrado na Lista`)
    }
    num.value = ``
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert(`Adicione os números para prosseguir!`)
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (pos in valores){
            soma += valores[pos]
            media = soma/tot
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML=``
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> A soma dos valores é: ${soma}</p>`
        res.innerHTML += `<p> A media dos valores é: ${media}</p>`
    }

}







