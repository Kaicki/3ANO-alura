document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const menuAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentarFonteBtn = document.getElementById('aumentar-fonte');
    const diminuirFonteBtn = document.getElementById('diminuir-fonte');
    const alternaContrasteBtn = document.getElementById('alterna-contraste');
    const feedbackFonte = document.getElementById('feedback-fonte');

    // Toggle menu acessibilidade
    botaoAcessibilidade.addEventListener('click', () => {
        menuAcessibilidade.classList.toggle('active');
    });

    // Função para ajustar tamanho da fonte
    function ajustarFonte(incremento) {
        const body = document.body;
        const estiloAtual = window.getComputedStyle(body).fontSize;
        let tamanhoAtual = parseFloat(estiloAtual);
        let novoTamanho = tamanhoAtual + incremento;

        if (novoTamanho < 12) novoTamanho = 12;
        if (novoTamanho > 24) novoTamanho = 24;

        body.style.fontSize = novoTamanho + 'px';
        feedbackFonte.textContent = `Fonte: ${novoTamanho}px`;
    }

    aumentarFonteBtn.addEventListener('click', () => ajustarFonte(2));
    diminuirFonteBtn.addEventListener('click', () => ajustarFonte(-2));

    alternaContrasteBtn.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // Fecha o menu se clicar fora
    document.addEventListener('click', (e) => {
        if (!menuAcessibilidade.contains(e.target) && e.target !== botaoAcessibilidade) {
            menuAcessibilidade.classList.remove('active');
        }
    });

    // ScrollReveal - animações de rolagem
    ScrollReveal().reveal('.animate', {
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        opacity: 0,
        interval: 200,
        delay: 200,
    });

    // Adicionando o ScrollReveal para as seções específicas
    ScrollReveal().reveal('#inicio', { delay: 300 });
    ScrollReveal().reveal('#biografia', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 700 });
    ScrollReveal().reveal('footer', { delay: 900 });
});