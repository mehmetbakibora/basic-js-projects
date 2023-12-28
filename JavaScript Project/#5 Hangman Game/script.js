const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const message_popup = document.getElementById('popup');
const PlayAgainBtn = document.getElementById('play-again');

const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord().toUpperCase();

function getRandomWord(){
    const words = ["javascript","python","css","html","sql","java","dart","php","kotlin"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord(){
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </div>
        `).join('')}
    `;
    
    const w = word_el.innerText.replace(/\n/g,'').toUpperCase();
    if(w === selectedWord){
        popup.style.display = 'flex';
        message_popup.style.backgroundColor = 'green'
        message_el.innerText = 'You guessed it right';
    }

}

function updateWrongLetters(){
    wrongLetters_el.innerHTML = `
    ${wrongLetters.length > 0 ? `<h3>Wrong Letters</h3>`: ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    
    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if(index < errorCount){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    })
    if(wrongLetters.length === items.length){
        popup.style.display = 'flex';
        message_el.innerText = 'You lost';
        message_popup.style.backgroundColor = 'red'
    }
}
function displayMessage(){
    message.classList.add('show'); 

    setTimeout(function(){
        message.classList.remove('show');
    }, 2000);
}

PlayAgainBtn.addEventListener('click', function(){
    window.location.reload();
})

window.addEventListener('keydown', function(e){
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key.toUpperCase();
        
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }
            else{
                displayMessage();
            }
        }
        else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }
            else{
                displayMessage();
            }
        }
    }
});

displayWord();