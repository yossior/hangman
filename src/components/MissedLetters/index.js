import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'

const MissedLetters = () => {

    const lettersList = useSelector(state => state.missedLetters);

    return (
        <div className='missedLetters'>
            <h2>You Missed:</h2>
            <div id='MLWrapper'>
                {lettersList.map(letter => `${letter} `)}
            </div>

        </div>
    )
}

export default MissedLetters