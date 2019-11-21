import React from 'react'

const HangedMan = () => {
    return (
        <div>
            
            <img src="./imgs//bar.png" id="bar" />
            <div id="hangman">
                <img src="./imgs//head.png" id="head" />
                <img src="./imgs//neck.png" id="neck" />
                <div id="bodyCenter">
                    <img src="./imgs//left-arm.png" id="leftArm" />
                    <img src="./imgs//corpus.png" id="corpus" />
                    <img src="./imgs//right-arm.png" id="rightArm" />
                </div>

                <img src="./imgs//left-hand.png" id="leftHand" />
                <img src="./imgs//right-hand.png" id="rightHand" />
                <img src="./imgs//left-leg.png" id="leftLeg" />
                <img src="./imgs//right-leg.png" id="rightLeg" />

                <img src="./imgs//left-foot.png" id="leftFoot" />
                <img src="./imgs//right-foot.png" id="rightFoot" />

            </div>
        </div>
    )
}

export default HangedMan