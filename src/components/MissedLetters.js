import React from 'react';
import { useSelector } from 'react-redux';

const MissedLetters = () => {

    const lettersList = useSelector(state => state.missedLetters);

    return (
        <div>
            <h2>You Missed:</h2>
            {lettersList.map(letter => `${letter} `)}
        </div>
    )
}

export default MissedLetters