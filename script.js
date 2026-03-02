// El usuario indicó: "un contador de 10 dias que empiece mañana 2pm hora CDMX"
// Hoy es 2 de Marzo de 2026. Mañana es 3 de Marzo de 2026.
// 2 PM CDMX (Hora local de CDMX / GMT-6 constante) es "14:00:00-06:00"
// 10 días a partir del 3 de Marzo de 2026 a las 2 PM es el 13 de Marzo de 2026 a las 2 PM.
const targetDateString = "2026-03-13T14:00:00-06:00";
const targetDate = new Date(targetDateString).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Si ya llegamos a la fecha
    if (distance < 0) {
        setValues("00", "00", "00", "00");
        return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar dom
    setValues(
        days.toString().padStart(2, '0'),
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    );
}

function setValues(d, h, m, s) {
    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}

// Inicializar y correr el intervalo
updateCountdown();
setInterval(updateCountdown, 1000);
