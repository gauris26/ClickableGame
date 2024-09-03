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
    
    setDarkModeButton.addEventListener('click', toggleDarkMode);
    
    setGameTimeout.addEventListener('click', function () {
        let timeout = timeoutInput.value;
        if (timeout) {
            timeLeft = parseInt(timeout);
            timeLeftDisplay.textContent = timeout;
        }
    });

    startGame.addEventListener('click', function () {
        timeoutInput.disabled = true;
        setGameTimeout.disabled = true;
        startGame.disabled = true;
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
        const maxX = gameArea.clientWidth - (clickTarget.clientWidth - 25);
        const maxY = gameArea.clientHeight - (clickTarget.clientHeight - 25);
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
            let mensaje = `Tiempo agotado! Tu puntuación final es: ${score}`;
            messageDisplay.textContent = mensaje;
            alert(mensaje);
        }
    }

    function toggleDarkMode() {
        const bodyElement = document.getElementById('body');

        if (isDarkModeActive === false) {
            bodyElement.classList.add('darkModeActive');
            gameArea.style.border = '2px solid #84c754';
            setDarkModeButton.textContent = 'Desactivar Modo Oscuro'
            isDarkModeActive = true;
            return;
        }

        if (isDarkModeActive === true) {
            bodyElement.classList.remove('darkModeActive');
            gameArea.style.border = '2px solid #333';
            setDarkModeButton.textContent = 'Activar Modo Oscuro';
            isDarkModeActive = false;
            return;
        }
    }
});