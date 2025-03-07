document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play().catch(error => console.log('Ошибка фоновой музыки:', error));

    // Эмоджи для падения
    const emojis = ['🌸', '🏵', '🌼', '🌺', '💐', '🧡', '❤️', '🩷', '❤️‍🔥', '💜'];

    // Создание падающих эмоджи
    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = Math.random() * 5 + 5 + 's'; // Скорость от 5 до 10 секунд
        document.body.appendChild(emoji);
        emoji.addEventListener('animationend', function() {
            emoji.remove();
        });
    }
    setInterval(createEmoji, 500);

    // Показ животных
    const showButton = document.getElementById('show-congratulations');
    if (showButton) {
        showButton.addEventListener('click', function() {
            console.log('Кнопка нажата'); // Для отладки
            document.querySelector('.container').style.display = 'none';
            document.getElementById('animals-container').style.display = 'flex';
        });
    } else {
        console.error('Кнопка не найдена');
    }

    // Показ поздравления
    const animals = document.querySelectorAll('.animal');
    const modal = document.getElementById('congratulation-modal');
    const girlName = document.getElementById('girl-name');
    const congratulationMessage = document.getElementById('congratulation-message');
    const closeModal = document.getElementById('close-modal');
    const congratulationMusic = document.getElementById('congratulation-music');

    animals.forEach(animal => {
        animal.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            girlName.textContent = name;
            congratulationMessage.textContent = С 8 марта, ${name}! Желаю тебе счастья, любви и всего наилучшего!;
            modal.style.display = 'flex';
            congratulationMusic.play().catch(error => console.log('Ошибка поздравительной музыки:', error));
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        congratulationMusic.pause();
        congratulationMusic.currentTime = 0;
    });
});
