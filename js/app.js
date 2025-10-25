  function alterarStatus(numero){ /* Recebe o número do jogo como parâmetro */
      // Montar o ID completo
    let id = 'game-' + numero;  // Se passar 1, vira "game-1"

    let jogo = document.getElementById(id); /* Seleciona o elemento do jogo pelo ID */
    console.log("Jogo encontrado:", jogo);

    let imagem = jogo.querySelector(".dashboard__item__img"); /* Seleciona a imagem dentro do jogo */
    console.log("Imagem encontrada:", imagem);

    let botao = jogo.querySelector(".dashboard__item__button"); /* Seleciona o botão dentro do jogo */
    console.log("Botão encontrado:", botao);
    console.log("Texto do botão antes da alteração:", botao.textContent); /* Mostra o texto do botão antes da alteração */

  }
