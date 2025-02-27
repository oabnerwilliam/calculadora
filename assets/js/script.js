// Seleciona todos os botões da calculadora
const btns = document.querySelectorAll('.btn');
// Seleciona a tela da calculadora onde o valor será exibido
const tela = document.querySelector('.tela');

// Para cada botão, adiciona um evento de clique
btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const valor = e.target.value; // Pega o valor do botão clicado

    if (valor !== '=') {  // Se o botão não for "="
        // Se a tela estiver mostrando "0", substitui pelo valor clicado
        if (tela.innerText == "0") {
            tela.innerText = valor;
        } else {
            // Caso contrário, adiciona o valor ao final do que já está na tela
            tela.innerText += valor;
        }

        // Se o botão for "C" (limpar), reseta a tela para "0"
        if (valor === 'C') {
            tela.innerText = '0';
        }
    } else {
        // Se o botão for "=", realiza o cálculo
        try {
            // Avalia a expressão na tela e armazena o resultado
            const resultado = eval(tela.innerText);  
            // Verifica se o resultado é um número finito e válido
            if (!isFinite(resultado) || isNaN(resultado)) {
                tela.innerText = "Erro."; // Se não for válido, mostra "Erro."
            } else {
                tela.innerText = resultado; // Caso contrário, exibe o resultado
            }
        } catch {
            // Se ocorrer algum erro na avaliação da expressão, mostra "Erro."
            tela.innerText = "Erro.";
        }
    }
  })
);
