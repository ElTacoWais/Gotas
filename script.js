let timeLeft = 5 * 60;
let alarmCount = 1;
let audio;

function startTimer() {
    document.getElementById('startBtn').disabled = true;
    let timerInterval = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('time').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            playAlarm();
            alarmCount++;
            document.getElementById('alarmCount').innerHTML = `Veces que se ha tomado las gotas: <span class="alarm-number">${alarmCount}</span>`;
            document.querySelector('.alarm-number').classList.add('alarm-number');

            if (alarmCount === 5) {
                document.getElementById('resetBtn').disabled = false;
                document.getElementById('startBtn').disabled = true;
            }

            document.getElementById('stopBtn').disabled = false;
            clearInterval(timerInterval);
        }
    }, 1000);
}

function playAlarm() {
    audio = new Audio('alarma.mp3');
    audio.loop = true;
    audio.play();
}

function stopAlarm() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('time').textContent = '05:00';
    timeLeft = 5 * 60;
    if (alarmCount < 5){
        document.getElementById('startBtn').disabled = false;
    }
}

function resetAlarmCount() {
    alarmCount = 1;
    document.getElementById('alarmCount').innerHTML = `Veces que se ha tomado las gotas: <span class="alarm-number">${alarmCount}</span>`;
    document.querySelector('.alarm-number').classList.add('alarm-number');
    document.getElementById('resetBtn').disabled = true;
    document.getElementById('startBtn').disabled = false;
}
