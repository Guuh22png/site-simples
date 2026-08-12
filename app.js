'use strict';

// Busca o botão pela classe correta: "btg"
const switcher = document.querySelector('.btg');

switcher.addEventListener('click', function () {

    // Alterna entre light-theme e dark-theme no body
    document.body.classList.toggle('dark-theme');

    // Atualiza o texto do botão conforme o tema atual
    const className = document.body.className;

    if (className === 'light-theme') {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }

    console.log('Tema atual: ' + className);

});