import { useContext, useReducer, createContext } from "react";

const initialState = {
    index : 0,
    score : 0,
    quizCategory : '',
    selectedOption : null,
    quiz : []
}

const quizReducer = (state, { type, payload }) => {
    switch(type){

        case "SET_QUIZ":
            return {
                ...state,
                quiz: payload
            }

        case "CATEGORY":
            console.log(payload);
            return {
                ...state,
                quizCategory: payload
            }
        case "NEXT_QUESTION":
            return {
                ...state,
                index: state.index + 1,
                selectedOption: null
            }
        case "SUBMIT":
            return {
                ...state,
                index : 0,
                selectedOption: null
            }
        case "QUIT":
            return {
                ...state,
                index: 0,
                score: 0,
                selectedOption: null
            }
        case "SET_SELECTED_OPTION":
            return {
                ...state,
                selectedOption: payload.optionId,
                score: payload.isCorrect ? state.score + 5 : state.score
            }
        default:
            return state
    }
}


const QuizContext = createContext();


const QuizProvider = ({children}) =>{

    const [{index,score,quizCategory,selectedOption,quiz},quizDispatch] = useReducer(quizReducer,initialState);

    return(
        <QuizContext.Provider value={{index,score,quizCategory,selectedOption,quiz,quizDispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () =>  useContext(QuizContext);
export { useQuiz, QuizProvider }

