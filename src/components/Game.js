import React, { useState, useEffect } from 'react';
import EventListener from 'react-event-listener';
import randomWords from 'random-words';

// const images = importAll(require.context('../assets/imgs', false, '/\.png/'));


const Game = () => {
    const initialWord = randomWords();
    const [counter, setCounter] = useState(0);
    const [word, setWord] = useState(initialWord);
    const [lettersLeft, setLetterLeft] = useState(word);
    const [wrongGuesses, setWrongGuesses] = useState([]);

    function newWord() {
        debugger
        const word = randomWords();
        setWord(word);
        setLetterLeft(word);
    }

    setTimeout(() => {
        newWord()
    }, 3000);


    function handleKeyDown(e) {
        const key = e.key.toLowerCase()
        console.log(key, 'Pressed');

        if (word.includes(key)) {
            highlightLetters(key);
        } else {
            handleWrongGuess(key);
        }
    }

    function handleWin() {
        alert('Win!')
    }

    useEffect(() => {
        console.log('Word:', word);
        console.log('letters left', lettersLeft);
        console.log('Wrong guesses:', counter);
        if (lettersLeft == 0) handleWin();
    }, [lettersLeft])

    useEffect(() => {
        console.log('Word:', word);
        console.log('letters left', lettersLeft);
        console.log('Wrong guesses:', counter);
        if (counter == 11) handleLoose()

    }, [counter])

    function highlightLetters(letter) {
        //TODO Reveal letters
        setLetterLeft(lettersLeft.replace(new RegExp(letter, 'g'), ''));
    }

    function handleLoose() {
        alert('loose /:')
    }

    function handleWrongGuess(letter) {
        if (counter != 11) {
            setWrongGuesses([...wrongGuesses, letter]);
            setCounter(counter + 1);
        } else {
            handleLoose();
        }
    }

    return (
        <div>
            <EventListener target={document} onKeyDown={handleKeyDown} />

        </div>
    )
}

export default Game
