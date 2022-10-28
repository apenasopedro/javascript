function verificar(){
    let num = document.getElementById(`txtnum`)
    let num1 = document.getElementById(`txtnum1`)
    let num2 = document.getElementById(`txtnum2`)
    let res = document.getElementById(`res`)
    if(num.value.length == 0 || num1.value.length == 0 | num2.value.length == 0){
        window.alert("[ERRO] Faltam Dados!")
    } else{   
    let n = Number(num.value)
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let number = [n, n1, n2]
    
    number.sort((a, b) => b - a);
    res.innerHTML = (`A ordem decrescente é: ${number} e em crescente é: ${number.sort()}` );

    
    /*res.innerHTML = (`A ordem crescente é: ${number.sort()}`)
    */
    
    
    }
    


}