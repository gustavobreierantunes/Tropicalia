document.addEventListener('DOMContentLoaded', function() {

    // Verificando se os elementos existem para evitar erros
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Se os elementos de acessibilidade existirem, adicione os event listeners
    if (botaoDeAcessibilidade && opcoesDeAcessibilidade) {
        botaoDeAcessibilidade.addEventListener('click', function() {
            botaoDeAcessibilidade.classList.toggle('rotacao-botao');
            opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

            const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
            botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
        });
    }

    // Elementos para aumentar e diminuir a fonte
    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    
    // Verifica se os botões de aumento e diminuição de fonte existem
    if (aumentarFonteBotao && diminuirFonteBotao) {
        let tamanhoAtualFonte = 1;

        aumentarFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });

        diminuirFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });
    }

    // Botão de alternância de contraste
    const alternaContraste = document.getElementById('alterna-contraste');

    // Verifica se o botão de alternância de contraste existe
    if (alternaContraste) {
        alternaContraste.addEventListener('click', function() {
            document.body.classList.toggle('alto-contraste'); // Alterna entre os contrastes
        });
    }

});

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });