const btns = document.querySelectorAll('.btn')
const tela = document.querySelector('.tela')
btns.forEach((btn) =>
  btn.addEventListener('click', (e)=>{
    const valor = e.target.value
    if (valor!== '=') {
        if (tela.innerText == "0") {
            tela.innerText = valor
        } else {
            tela.innerText += valor
        }
        if (valor === 'C') {
            tela.innerText = '0'
        }
    } else {
        // console.log(eval(tela.innerText))
        try{
            const resultado = eval(tela.innerText)  
            if (!isFinite(resultado) || isNaN(resultado)) {
                tela.innerText = "Erro.";
            } else {
                tela.innerText = resultado;
            }  
        } catch {
            tela.innerText = "Erro."
        }
        
    }
  })
)