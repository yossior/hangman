import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WordCube from "./LetterCube";

const WordLetters = () => {

    const { lettersList, lettersLeft } = useSelector(state => ({
        lettersList: Array.from(state.word),
        lettersLeft: state.lettersLeft
    }))

    return (
        <div>
            {lettersList.map(letter => <WordCube letter={letter} reveal={!lettersLeft.includes(letter)} />)}
        </div>
    )
}

export default WordLetters