// 1. EFECTO MÁQUINA DE ESCRIBIR EN EL TÍTULO
const textToType = "Una Carta de Amor para la persona más maravillosa";
const headerElement = document.getElementById('header-text');
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        headerElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 70); // Velocidad de escritura (ms)
    } else {
        // Elimina el cursor parpadeante después de escribir
        headerElement.style.borderRight = 'none'; 
    }
}

// 2. FUNCIONALIDAD DEL BOTÓN SECRETO
const revealButton = document.getElementById('revealButton');
const hiddenMessage = document.getElementById('hiddenMessage');

revealButton.addEventListener('click', () => {
    // Alternar la clase 'visible' para mostrar/ocultar
    hiddenMessage.classList.toggle('visible');

    // Cambiar el texto del botón
    if (hiddenMessage.classList.contains('visible')) {
        revealButton.textContent = 'Ocultar Mensaje';
    } else {
        revealButton.textContent = 'Revelar Secreto ✨';
    }
});

// Inicia el efecto de máquina de escribir cuando la página carga
document.addEventListener('DOMContentLoaded', typeWriter);
