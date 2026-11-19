const btnTema = document.getElementById('btn-tema');
const btnIdioma = document.getElementById('btn-idioma');

let modoNoturno = false;
let idiomaAtual = 'pt';

// Alternar Modo Noturno
btnTema.addEventListener('click', () => {
    modoNoturno = !modoNoturno;
    document.body.classList.toggle('dark-mode');
    atualizarTextoBotoes();
});

// Alternar Idioma (Português / Inglês)
btnIdioma.addEventListener('click', () => {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    
    // Troca o texto de todos os elementos que possuem data-pt e data-en
    const elementosTraduziveis = document.querySelectorAll('[data-pt][data-en]');
    elementosTraduziveis.forEach(elemento => {
        elemento.innerHTML = elemento.getAttribute(`data-${idiomaAtual}`);
    });

    // Atualiza o atributo lang da página
    document.documentElement.lang = idiomaAtual === 'pt' ? 'pt-BR' : 'en';
    
    atualizarTextoBotoes();
});

// Atualiza o texto dos botões conforme o estado atual
function atualizarTextoBotoes() {
    if (idiomaAtual === 'pt') {
        btnTema.textContent = modoNoturno ? '☀️ Modo Claro' : '🌙 Modo Noturno';
        btnIdioma.textContent = '🇺🇸 English';
    } else {
        btnTema.textContent = modoNoturno ? '☀️ Light Mode' : '🌙 Dark Mode';
        btnIdioma.textContent = '🇧🇷 Português';
    }
}