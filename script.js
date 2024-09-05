document.addEventListener('DOMContentLoaded', function () {
    const gameArea = document.getElementById('gameArea');
    const clickTarget = document.getElementById('clickTarget');
    const scoreDisplay = document.getElementById('score');
    const timeLeftDisplay = document.getElementById('timeLeft');
    const messageDisplay = document.getElementById('mensaje');
    const setGameTimeout = document.getElementById('setGameTimeout');
    const timeoutInput = document.getElementById('timeout');
    const startGame = document.getElementById('startGame');
    const setDarkModeButton = document.getElementById('setDarkModeButton');

    let refreshIntervalId = null;
    let score = 0;
    let timeLeft = 30;
    let isDarkModeActive = false;

    // Cambios en el DOM 
    document.title = "Juego de Clics"; 
    document.body.id = "body";

    // aqui se agrega una etiqueta <label> a input tiempo
    const labelTimeout = document.createElement('label');
    labelTimeout.setAttribute('for', 'timeout');
    labelTimeout.textContent = "Tiempo (segundos): ";
    timeoutInput.parentNode.insertBefore(labelTimeout, timeoutInput);

    setDarkModeButton.addEventListener('click', toggleDarkMode);

    setGameTimeout.addEventListener('click', function () {
        let timeout = parseInt(timeoutInput.value);
        if (!isNaN(timeout) && timeout > 0) {
            timeLeft = timeout;
            timeLeftDisplay.textContent = timeout;
        } else {
            alert('Por favor, ingresa un número válido');
        }
    });

    startGame.addEventListener('click', function () {
        timeoutInput.disabled = true;
        setGameTimeout.disabled = true;
        startGame.disabled = true;
        score = 0;
        scoreDisplay.textContent = score;
        messageDisplay.textContent = '';
        refreshIntervalId = setInterval(updateTimer, 1000);
    });

    clickTarget.addEventListener('click', function () {
        if (refreshIntervalId != null) {
            score++;
            scoreDisplay.textContent = score;
            moveTarget();
        }
    });

    function moveTarget() {
        const maxX = gameArea.clientWidth - clickTarget.clientWidth;
        const maxY = gameArea.clientHeight - clickTarget.clientHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        clickTarget.style.left = randomX + 'px';
        clickTarget.style.top = randomY + 'px';
    }

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        } else {
            if (refreshIntervalId != null) {
                clearInterval(refreshIntervalId);
                refreshIntervalId = null;
            }
            timeoutInput.disabled = false;
            setGameTimeout.disabled = false;
            startGame.disabled = false;
            let mensaje = `¡Tiempo agotado! Tu puntuación final es: ${score}`;
            messageDisplay.textContent = mensaje;
            alert(mensaje);
        }
    }

    function toggleDarkMode() {
        const bodyElement = document.getElementById('body');

        isDarkModeActive = !isDarkModeActive;
        bodyElement.classList.toggle('darkModeActive', isDarkModeActive);
        gameArea.style.border = isDarkModeActive ? '2px solid #84c754' : '2px solid #333';
        setDarkModeButton.textContent = isDarkModeActive ? 'Desactivar Modo Oscuro' : 'Activar Modo Oscuro';
    }
});
