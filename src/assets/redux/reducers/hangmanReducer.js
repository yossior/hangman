import actions from "../actionsEnum";

const initialState = {
    word: '',
    lettersLeft: [],
    lettersTried: [],
    missedLetters: [],
    wrongGuessesCounter: 0
};

const addLetterToTried = (arr, letter) => {
    return [...arr, letter];
}

const hangmanReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case actions.NEWWORD:
            newState = {
                ...initialState,
                word: action.word,
                lettersLeft: Array.from(action.word)
            }
            return newState;

        case actions.RIGHTGUESS:
            newState = {
                ...state,
                lettersLeft: state.lettersLeft.filter(char => char !== action.letter),
                lettersTried: addLetterToTried(state.lettersTried, action.letter)
            };
            return newState;

        case actions.WRONGGUESS:
            newState = {
                ...state,
                lettersTried: addLetterToTried(state.lettersTried, action.letter),
                wrongGuessesCounter: state.wrongGuessesCounter + 1,
                missedLetters: [...state.missedLetters, action.letter]
            };
            return newState;

        default:
            return state;
    }
};
export default hangmanReducer;