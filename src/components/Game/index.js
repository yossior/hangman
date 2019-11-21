import React, { useState, useEffect } from 'react';
import EventListener from 'react-event-listener';
import randomWords from 'random-words';
import MissedLetters from '../MissedLetters';
import Modal from 'react-modal';

import { rightGuess, wrongGuess, newWord } from "../../assets/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import WordLetters from '../WordLetters';
import HangedMan from '../HangedMan';

const Game = () => {
    const { word, lettersTried, lettersLeft, counter, missedLettersArr } = useSelector(state => ({
        word: state.word,
        lettersTried: state.lettersTried,
        lettersLeft: state.lettersLeft,
        counter: state.wrongGuessesCounter,
        missedLettersArr: state.missedLetters
    }))

    const dispatch = useDispatch();

    const keyRegEx = new RegExp(/^[a-z]/);

    useEffect(() => {
        setNewWord();
    }, [])

    useEffect(() => {
        console.log(missedLettersArr);

        if (counter === 11) handleLoose()
        if (lettersLeft.length === 0 && word !== '') handleWin()
    })

    function setNewWord() {
        dispatch(newWord(randomWords()));
    }

    function handleKeyDown(e) {
        const key = e.key.toLowerCase()
        if (keyRegEx.test(key)) {
            console.log(key, 'Pressed');
            debugger
            if (lettersTried.includes(key)) {
                debugger
                console.log('tried before');
            } else {
                if (lettersLeft.includes(key)) {
                    handleRightGUess(key);
                } else {
                    handleWrongGuess(key);
                }
            }
        }
    }

    function handleWin() {
        alert('Win!')
    }

    function handleRightGUess(letter) {
        dispatch(rightGuess(letter));
    }

    function handleLoose() {
        alert('loose /:')
    }

    function handleWrongGuess(letter) {
        debugger
        dispatch(wrongGuess(letter));
    }

    return (
        <div>
            <EventListener target={document} onKeyDown={handleKeyDown} />
            <div id='upperContainer'>
                <HangedMan />
                <WordLetters />
            </div>
            <MissedLetters MissedLettersArr={missedLettersArr} />
        </div>
    )
}

export default Game