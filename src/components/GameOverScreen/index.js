import React from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import randomWords from 'random-words';
import { newWord } from '../../assets/redux/actions/actions';

const GameOverScreen = props => {

    const dispatch = useDispatch();

    function setNewWord() {
        dispatch(newWord(randomWords()))
    }

    return (
        <div id='modalDiv'>
            <h1>{props.win ? 'You Win!' : 'Game Over'}</h1>
            <button onClick={setNewWord}>New Word</button>
        </div>
    )
}

export default GameOverScreen