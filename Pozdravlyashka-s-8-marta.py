from flask import Flask, render_template

app = Flask(__name__)

# Список имен для животных (замените на свои)
names = ['Алёна', 'Аня(фк2)', 'Патя', 'Света', 'Настя', 'Даша', 'Аня(бух)']

# Список поздравлений (замените на свои)
messages = [
    'Дорогая Алёна, с 8 марта! Желаю счастья, любви и весны в душе!',
    'Аня, поздравляю с праздником! Пусть все мечты сбываются!',
    'Патя, с 8 марта! Желаю радости и море цветов!',
    'Света, с весенним праздником! Будь всегда счастлива!',
    'Настя, с 8 марта! Пусть каждый день будет ярким!',
    'Даша, поздравляю! Желаю тепла и уюта!',
    'Аня, с праздником! Пусть жизнь будет сладкой!'
]

# Список GIF-файлов животных (замените на свои файлы)
animals = ['animal1.gif', 'animal2.gif', 'animal3.gif', 'animal4.gif', 'animal5.gif', 'animal6.gif', 'animal7.gif']

# Фоновая музыка (замените на свою, положив файл в static/)
background_music = 'background_music.mp3'  # Поменяйте на свой файл, например 'my_music.mp3'

# Музыка для поздравления (замените на свою, положив файл в static/)
message_music = 'message_music.mp3'  # Поменяйте на свой файл, например 'my_greeting_music.mp3'

@app.route('/')
def index():
    return render_template('index.html', names=names, messages=messages, animals=animals,
                           background_music=background_music, message_music=message_music)

if __name__ == '__main__':
    app.run(debug=True)