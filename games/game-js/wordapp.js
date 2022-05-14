import { dictionary } from './wordictionary.js';

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')

let letterInWord = 5;
let rowNumbers = 6;
let coefficient = 4;

let wordle

// ** we get a random word from the library
const getWordle = () => {   
    wordle = dictionary[Math. floor(Math. random()*dictionary. length)].toUpperCase();
    return wordle; 
}
getWordle()
// ! enter the chosen word to check the code
console.log(getWordle());

const keys = [
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х', 
    'Ф',
    'І',
    'В',
    'А',
    'П',
    '««',
    'Р',  
    'О',
    'Л',
    'Д', 
    'Ж', 
    'Є',
    'Я',
    'Ч',
    'С',
    'М',
    'И',
    'Т',
    'Ь',   
    'Б',
    'Ю',
    'ENTER'
]
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
let currentRow = 0
let currentTile = 0
let isGameOver = false

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})

const handleClick = (letter) => {
    if (!isGameOver) {
        if (letter === '««') {
            deleteLetter()
            return
        }
        if (letter === 'ENTER') {
            checkRow()
            return
        }
        addLetter(letter)
    }
}

const addLetter = (letter) => {
    if (currentTile < letterInWord && currentRow < rowNumbers) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++
    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}


const gameCheck = document.getElementById('gameCheck');

gameCheck.addEventListener('click', function() {
    checkRow(); 
})

// ** when 5 letters are typed
const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if (currentTile > coefficient) {
                if (dictionary.includes(guess.toLowerCase()) === false) {
                    showMessage('word not in list');
                    deleteLetter();
                    return
                } else {
                    flipTile()
                    if (wordle === guess) {
                        showMessage('Magnificent! Congratulations! You won.')
                        isGameOver = true
                        return
                    } else {
                        if (currentRow >= letterInWord) {
                            isGameOver = true
                            showMessage('Game Over')
                            return
                        }
                        if (currentRow < letterInWord) {
                            currentRow++
                            currentTile = 0
                        }
                    }
                }
    }
}


let timeOfMessage = 5000;
// **display a message for the player
const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => messageDisplay.removeChild(messageElement), timeOfMessage)
}

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;
    let checkWordle = wordle;
    let timeEffect = 500;
    const guess = [];

    rowTiles.forEach(tile => {
        guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
    })

    guess.forEach((guess, index) => {
        if (guess.letter === wordle[index]) {
            guess.color = 'green-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    guess.forEach(guess => {
        if (checkWordle.includes(guess.letter)) {
            guess.color = 'yellow-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    rowTiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip')
            tile.classList.add(guess[index].color)
            addColorToKey(guess[index].letter, guess[index].color)
        }, timeEffect * index)
    })
}

const gameReset = document.getElementById('gameReset');

gameReset.addEventListener('click', function() {
    window.location.reload()
});
