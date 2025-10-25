  function alterarStatus(numero){ /* Recebe o número do jogo como parâmetro */
      // Montar o ID completo
    let id = 'game-' + numero;  // Se passar 1, vira "game-1"
    let jogo = document.getElementById(id); /* Seleciona o elemento do jogo pelo ID */
    let imagem = jogo.querySelector(".dashboard__item__img"); /* Seleciona a imagem dentro do jogo */
    let botao = jogo.querySelector(".dashboard__item__button"); /* Seleciona o botão dentro do jogo */

    if (botao.textContent == 'Alugar') {
        // ALUGAR
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return'); // ← NOVO!

    } else {
        // DEVOLVER
        botao.textContent = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return'); // ← NOVO!
    }

  }
