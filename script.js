const backgroundMusic = document.getElementById('background-music');
const messageMusic = document.getElementById('message-music');
const showGreetingButton = document.getElementById('show-greeting');
const initialScreen = document.getElementById('initial-screen');
const animalsScreen = document.getElementById('animals-screen');
const messageModal = document.getElementById('message-modal');
const messageContent = document.getElementById('message-content');
const closeMessageButton = document.getElementById('close-message');

// Показать животных при нажатии кнопки
showGreetingButton.addEventListener('click', () => {
    initialScreen.style.display = 'none';
    animalsScreen.style.display = 'flex';
});

// Показать поздравление при клике на животное
animalsScreen.addEventListener('click', (event) => {
    const animal = event.target.closest('.animal');
    if (animal) {
        const message = animal.getAttribute('data-message');
        messageContent.textContent = message;
        messageModal.style.display = 'flex';
        backgroundMusic.pause();
        messageMusic.play();
    }
});

// Закрыть поздравление
closeMessageButton.addEventListener('click', () => {
    messageModal.style.display = 'none';
    messageMusic.pause();
    messageMusic.currentTime = 0; // Сбросить музыку
    backgroundMusic.play();
});

// Создать падающие цветы
function createFallingFlowers() {
    const fallingFlowersContainer = document.getElementById('falling-flowers');
    const flowerImages = ['flower1.png', 'flower2.png', 'flower3.png']; // Замените на свои файлы
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('img');
        flower.src = '/static/' + flowerImages[Math.floor(Math.random() * flowerImages.length)];
        flower.className = 'falling-flower';
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = (Math.random() * 3 + 5) + 's'; // От 5 до 8 секунд
        flower.style.animationDelay = Math.random() * 5 + 's';
        fallingFlowersContainer.appendChild(flower);
    }
}

window.addEventListener('load', createFallingFlowers);