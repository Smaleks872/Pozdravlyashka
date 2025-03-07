document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    music.play(); // Воспроизведение фоновой музыки

    // Создание падающих цветочков
    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 2 + 3 + 's'; // Случайная скорость
        document.body.appendChild(flower);
        flower.addEventListener('animationend', function() {
            flower.remove();
        });
    }
    setInterval(createFlower, 300); // Новый цветочек каждые 300мс

    // Показ животных при нажатии на кнопку
    document.getElementById('show-congratulations').addEventListener('click', function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('animals-container').style.display = 'flex';
    });

    // Показ поздравления при нажатии на животное
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
            congratulationMusic.play();
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        congratulationMusic.pause();
        congratulationMusic.currentTime = 0;
    });
});
