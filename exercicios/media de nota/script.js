let nota = document.getElementById(`txtnota`);
let res = document.getElementById(`res`)
let valores = []
function isNumero(n){
    if (Number(n) >= 0 && Number(n) <= 10){
        return true
    }else{
        return false
    }
}
function adicionar(){
   
    if (isNumero(nota.value)){
        valores.push(Number(nota.value))
        res.innerHTML=``
    }
    nota.value = ``
    nota.focus()
}
function verificar(){
    if(valores.length == 0){
        window.alert(`Digite números para prosseguir!`)

    }else{
        let tot = valores.length
        let soma = 0
        let media = 0 
        for (pos in valores){
            soma += valores[pos]
            media = soma/tot
            
        }
        valores.length = 0 
        if (media == 10){
            res.innerHTML += `Aprovado com Distinção!`
        }else if(media >= 7){
            res.innerHTML += `Aprovado !`
        } else {
            res.innerHTML += `Reprovado!`
        }
        }
           
}