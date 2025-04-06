/* 
  O que queremos fazer?
  Quando o usuário clicar em um botão de personagem:
    - Marcar esse botão como selecionado
    - Mostrar o personagem correspondente na tela

  OBJETIVO 1 - Marcar o botão como selecionado
    Etapa 1: Selecionar todos os botões com JS para detectar cliques
    Etapa 2: Quando o botão for clicado, adicionar a classe "selecionado" nele
    Etapa 3: Se já houver outro botão com a classe "selecionado", remover essa classe dele

  OBJETIVO 2 - Exibir o personagem correspondente
    Etapa 1: Selecionar todos os personagens com JS
    Etapa 2: Mostrar o personagem correspondente adicionando a classe "selecionado" nele
    Etapa 3: Se já houver outro personagem com a classe "selecionado", remover essa classe dele
*/

// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Para cada botão, adiciona um "escutador de clique"
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remove a seleção do botão anterior (se houver)
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }

        // Adiciona a seleção ao botão clicado
        botao.classList.add("selecionado");

        // Remove a seleção do personagem anterior (se houver)
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado");
        }

        // Exibe o personagem correspondente ao botão clicado
        personagens[indice].classList.add("selecionado");
    });
});
