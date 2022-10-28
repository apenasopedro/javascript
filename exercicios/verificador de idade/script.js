function verificar(){
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById (`txano`)
    var res = document.getElementById (`res`)
    var img = document.createElement(`img`)
    /*img.setAttribute(`id`, `foto`)*/
    if(fyear.value.length == 0 ||Number(fyear.value) > year){
        window.alert("[ERRO] Tente Novamente!")
    } else{
        var fsex  = document.getElementsByName ("radsex")
        var idade = year - Number(fyear.value)
       var gener = ``
       if (fsex[0].checked) {
        genero = `Homem`
        etaria= `Idoso`
       } else if (fsex[1].checked) {
        genero = `Mulher`
        etaria = `Idosa`
        
       }
       if(idade >=0 && idade < 12){
        //Criança
        img.setAttribute(`src`,`images/children.jpg` )
        etaria = `criança`
       } else if (idade < 21){
        //Jovem
        img.setAttribute(`src`,`images/adolecents.jpg` )
        etaria = `Jovem`
       } else if (idade < 50){
        //Adulto
        img.setAttribute(`src`,`images/adults.jpg` )
        etaria = `Adulto(a)`
       }else{
        //Idoso
        img.setAttribute(`src`,`images/idosos.jpg` )
       }
       res.innerHTML = `Você tem ${idade} anos e é um(a) ${genero} e ${etaria}`
       
       res.appendChild(img)
    }

} 