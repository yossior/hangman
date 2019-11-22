import React from 'react'
import './style.css'
import { useSelector } from "react-redux";

const HangedMan = () => {

    const counter = useSelector(state => state.wrongGuessesCounter);

    return (
        <div className='hangedManComp'>
            <img src="./imgs//bar.png" id="bar" className={counter < 1 ? 'hide' : null} />

            <div id="hangman">

                <img src="./imgs//head.png" id="head" className={counter < 2 ? 'hide' : null} />
                <img src="./imgs//neck.png" id="neck" className={counter < 3 ? 'hide' : null} />

                <div id="bodyCenter">
                    <div id='leftArmHand'>
                        <img src="./imgs//left-arm.png" id="leftArm" className={counter < 6 ? 'hide' : null} />
                        <img src="./imgs//left-hand.png" id="leftHand" className={counter < 8 ? 'hide' : null} />
                    </div>

                    <img src="./imgs//corpus.png" id="corpus" className={counter < 4 ? 'hide' : null} />

                    <div id='rightArmHand'>
                        <img src="./imgs//right-arm.png" id="rightArm" className={counter < 5 ? 'hide' : null} />
                        <img src="./imgs//right-hand.png" id="rightHand" className={counter < 7 ? 'hide' : null} />
                    </div>
                </div>

                <div id='legs'>
                    <div id='leftLegFoot'>
                        <img src="./imgs//left-leg.png" id="leftLeg" className={counter < 10 ? 'hide' : null} />
                        <img src="./imgs//left-foot.png" id="leftFoot" className={counter < 12 ? 'hide' : null} />
                    </div>
                    <div id='rightLegFoot'>
                        <img src="./imgs//right-leg.png" id="rightLeg" className={counter < 9 ? 'hide' : null} />
                        <img src="./imgs//right-foot.png" id="rightFoot" className={counter < 11 ? 'hide' : null} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HangedMan