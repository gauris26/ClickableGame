document.addEventListener('DOMContentLoaded', function() {
    const gameArea = document.getElementById('gameArea');
    const clickTarget = document.getElementById('clickTarget');
    const scoreDisplay = document.getElementById('score');
    const timeLeftDisplay = document.getElementById('timeLeft');
    const messageDisplay = document.getElementById('mensaje');
    let refreshIntervalId = null;
    let score = 0;
    let timeLeft = 5;

    clickTarget.addEventListener('click', function() {
        score++;
        scoreDisplay.textContent = score;
        moveTarget();
    });

    function moveTarget() {
        const maxX = gameArea.clientWidth/* - clickTarget.clientWidth*/;
        const maxY = gameArea.clientHeight/* - clickTarget.clientHeight*/;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        clickTarget.style.left = randomX+'px';
        clickTarget.style.top = randomY+'px';
    }

    function updateTimer() {
        if(timeLeft > 0) {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        } else {
            if(refreshIntervalId != null) {
                clearInterval(refreshIntervalId);
            }
            let mensaje = `Tiempo agotado! Tu puntuación final es: ${score}`;
            mesageDisplay.textContent = mensaje;
            alert(mensaje);
        }
    }

    refreshIntervalId = setInterval(updateTimer, 1000);
});