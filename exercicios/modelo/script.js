function carregar(){
var msg = window.document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)
var agora = new Date()
var hora = agora.getHours()
var hora= 5
msg.innerHTML= `A Hora Atual é ${hora} horas `
if (hora > 4 && hora < 12){
    img.src = `images/morning.jpg`
    document.body.style.background = `rgb(0, 153, 255)`
}else if (hora >= 12 && hora< 18){
    img.src = `images/afternoon.jpg`
    document.body.style.background = `#fe7701`
} else{
    img.src = `images/night.jpg`
    document.body.style.background = `#206282`
}
}

