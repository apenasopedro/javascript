function verificar(){
    let turn = document.getElementById(`txtturno`).value; 
    let res = document.getElementById(`res`);
    let turno = turn;
    res.innerHTML+=``
    if (turno == `m`){
        res.innerHTML+=(`Bom dia!`)
    }else if (turno == `v`){
        res.innerHTML+=(`Boa Tarde!`)
    }else if (turno == `n`){
        res.innerHTML+=(`Boa Noite!`)
    }else{
        res.innerHTML+=(`Dado Inválido!`)
    }
    
}