const yesBtn = document.querySelector('#yesBtn');

    yesBtn.addEventListener('click',function () {
    });


const noBtn = document.querySelector('#noBtn');

    noBtn.addEventListener('touchstart', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del evento táctil, como el desplazamiento de la página
        const randomY = Math.random() * 100; // Genera una coordenada Y aleatoria
        const randomX = Math.random() * 100; // Genera una coordenada X aleatoria
        noBtn.style.setProperty('top', randomY + 'vh'); // Establece la posición vertical del botón con respecto a la ventana del navegador
        noBtn.style.setProperty('left', randomX + 'vw'); // Establece la posición horizontal del botón con respecto a la ventana del navegador
    });