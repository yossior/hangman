import React from 'react'
import './style.css'

const HangedMan = () => {
    return (
        <div className='hangedManComp'>
            <img src="./imgs//bar.png" id="bar" />

            <div id="hangman">

                <img src="./imgs//head.png" id="head" />
                <img src="./imgs//neck.png" id="neck" />

                <div id="bodyCenter">
                    <div id='leftArmHand'>
                        <img src="./imgs//left-arm.png" id="leftArm" />
                        <img src="./imgs//left-hand.png" id="leftHand" />
                    </div>

                    <img src="./imgs//corpus.png" id="corpus" />

                    <div id='rightArmHand'>
                        <img src="./imgs//right-arm.png" id="rightArm" />
                        <img src="./imgs//right-hand.png" id="rightHand" />
                    </div>
                </div>

                <div id='legs'>
                    <div id='leftLegFoot'>
                        <img src="./imgs//left-leg.png" id="leftLeg" />
                        <img src="./imgs//left-foot.png" id="leftFoot" />
                    </div>
                    <div id='rightLegFoot'>
                        <img src="./imgs//right-leg.png" id="rightLeg" />
                        <img src="./imgs//right-foot.png" id="rightFoot" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HangedMan