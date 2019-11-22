import React, { useState, useEffect } from 'react';
import EventListener from 'react-event-listener';
import randomWords from 'random-words';
import MissedLetters from '../MissedLetters';
import GameOverScreen from "../GameOverScreen";

import { rightGuess, wrongGuess, newWord } from "../../assets/redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import WordLetters from '../WordLetters';
import HangedMan from '../HangedMan';
import Modal from 'react-modal';

const Game = () => {
    const { word, lettersTried, lettersLeft, counter, missedLettersArr } = useSelector(state => ({
        word: state.word,
        lettersTried: state.lettersTried,
        lettersLeft: state.lettersLeft,
        counter: state.wrongGuessesCounter,
        missedLettersArr: state.missedLetters
    }))

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(107,113,137,0.3)',
            zIndex: 100
        },
        content: {
            backgroundColor: 'rgba(0,0,0,0)',
            zIndex: 100,
            border: '0px',
            color: '#ffffff',
            width: '300px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            // marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    const [displayGameOver, setDisplayGameOver] = useState(false)
    const dispatch = useDispatch();
    const keyRegEx = new RegExp(/^[a-z]{1}$/);

    Modal.defaultStyles.overlay.backgroundColor = 'cornsilk';

    useEffect(() => {
        setNewWord();
    }, [])

    useEffect(() => {
        toggleGameOver(counter === 12)
        if (counter === 12) handleLoose()
        if (lettersLeft.length === 0 && word !== '') handleWin()
    })

    function toggleGameOver(bool) {
        setDisplayGameOver(bool)
    }

    function setNewWord() {
        dispatch(newWord(randomWords()));
    }

    function handleKeyDown(e) {
        if (counter !== 12) {
            const key = e.key.toLowerCase()
            //Filter alphabet chars
            if (keyRegEx.test(key)) {
                if (lettersTried.includes(key)) {
                } else {
                    if (lettersLeft.includes(key)) {
                        handleRightGUess(key);
                    } else {
                        handleWrongGuess(key);
                    }
                }
            }
        }
    }

    function handleWin() {
        setDisplayGameOver(true)
    }

    function handleRightGUess(letter) {
        dispatch(rightGuess(letter));
    }

    function handleLoose() {
        setDisplayGameOver(true)

    }

    function handleWrongGuess(letter) {
        dispatch(wrongGuess(letter));
    }

    return (
        <div >
            <EventListener target={document} onKeyDown={handleKeyDown} />
            <div id='upperContainer'>
                <HangedMan />
                <WordLetters />
            </div>
            <MissedLetters MissedLettersArr={missedLettersArr} />
            <Modal isOpen={displayGameOver} style={customStyles} >
                <GameOverScreen win={counter !== 12} />
            </Modal>
        </div>
    )
}

export default Game