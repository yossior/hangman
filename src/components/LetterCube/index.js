import React from 'react'
import './style.css'

const LetterCube = props => {
    return (
        <div className='letterCube'>
            <span>
                {props.reveal ? props.letter : null}
            </span>

        </div>
    )
}

export default LetterCube
