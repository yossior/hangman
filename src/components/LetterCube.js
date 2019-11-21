import React from 'react'

const LetterCube = props => {
    return (
        <div className='letterCube'>
            {props.reveal ? props.letter : null}
        </div>
    )
}

export default LetterCube
