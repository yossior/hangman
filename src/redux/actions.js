import actions from "./actionsEnum";

export const rightGuess = letter => {
   return async (dispatch) => {
      dispatch({
         type: actions.RIGHTGUESS,
         letter
      })
   }
}

export const wrongGuess = letter => {
   return async (dispatch) => {
      dispatch({
         type: actions.WRONGGUESS,
         letter
      })
   }
}

export const newWord = word => {
   return async (dispatch) => {
      dispatch({
         type: actions.NEWWORD,
         word
      })
   }
}