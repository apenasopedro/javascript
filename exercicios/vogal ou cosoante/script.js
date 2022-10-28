function verificar(){
    let letr = document.getElementById(`txtletra`).value;
    let letra = letr;
    letra = letra.toLowerCase();
    let resp = document.getElementById(`res`);
    res.innerHTML=``;
    if (letra.length > 1 || letra == Number(letr.value)){
        window.alert("Dado Invalido! Digite uma letra!")
    }else if (letra == `a` || letra == `e` ||letra == `i` ||letra == `o` ||letra == `u`){
        resp.innerHTML+=(`A letra é uma Vogal!`)
    }else{
        resp.innerHTML+=(`A letra é uma consoante!`)
    }
    
    
}