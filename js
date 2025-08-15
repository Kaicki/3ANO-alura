document.addEventListener('DOMContentLoaded', () => {

    const botao = document.getElementById('botao-acessibilidade');

    const opcoes = document.getElementById('opcoes-acessibilidade');

    const aumentar = document.getElementById('aumentar-fonte');

    const diminuir = document.getElementById('diminuir-fonte');

    const contraste = document.getElementById('alterna-contraste');

    const body = document.body;

    // Mostrar/ocultar menu

    botao.addEventListener('click', (e) => {

        e.stopPropagation();

        opcoes.classList.toggle('show');

    });

    // Fechar clicando fora

    document.addEventListener('click', (e) => {

        if (!opcoes.contains(e.target) && e.target !== botao) {

            opcoes.classList.remove('show');

        }

    });

    // Aumentar fonte

    aumentar.addEventListener('click', () => {

        let tamanho = parseFloat(window.getComputedStyle(body).fontSize);

        if (tamanho < 24) body.style.fontSize = (tamanho + 2) + 'px';

    });

    // Diminuir fonte

    diminuir.addEventListener('click', () => {

        let tamanho = parseFloat(window.getComputedStyle(body).fontSize);

        if (tamanho > 12) body.style.fontSize = (tamanho - 2) + 'px';

    });

    // Alternar contraste

    contraste.addEventListener('click', () => {

        body.classList.toggle('contraste');

    });

});