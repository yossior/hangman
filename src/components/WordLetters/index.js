import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WordCube from "../LetterCube";
import './style.css'

const WordLetters = () => {

    const { lettersList, lettersLeft } = useSelector(state => ({
        lettersList: Array.from(state.word),
        lettersLeft: state.lettersLeft
    }))

    return (
        <div className='wordLetters'>
            <ul>
                {lettersList.map(letter => <li><WordCube letter={letter} reveal={!lettersLeft.includes(letter)} /></li>)}
            </ul>
        </div>
    )
}

export default WordLetters