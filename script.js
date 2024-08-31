document.addEventListener('DOMContentLoaded', function () {
    const gameArea = document.getElementById('gameArea');
    const clickTarget = document.getElementById('clickTarget');
    const scoreDisplay = document.getElementById('score');
    const timeLeftDisplay = document.getElementById('timeLeft');
    const messageDisplay = document.getElementById('mensaje');
    const setGameTimeout = document.getElementById('setGameTimeout');
    const timeoutInput = document.getElementById('timeout');
    const startGame = document.getElementById('startGame');

    let refreshIntervalId = null;
    let score = 0;
    let timeLeft = 30;

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
        const maxX = gameArea.clientWidth - clickTarget.clientWidth;
        const maxY = gameArea.clientHeight - clickTarget.clientHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        clickTarget.style.left = randomX + 'px';
        clickTarget.style.top = randomY + 'px';

        /* Aqui agregue esto para que se haga mas pequeño a medida que se incremente la puntuacion */
        const newSize = Math.max(20, 50 - score * 2);
        clickTarget.style.width = newSize + 'px';
        clickTarget.style.height = newSize + 'px';
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
});