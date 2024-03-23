import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/quizContext';
import '../css_files/questions.css';


const Questions = ({quizData}) => {

  const navigate = useNavigate();
  const [currentQuiz] = quizData;
  const {title,quiz} = currentQuiz
  const { index, score, quizDispatch, selectedOption} = useQuiz();

  useEffect(()=>{
    console.log(selectedOption);
  },[])

  const handleNextQuestion = () =>{
    if(index < quiz.length-1){
        quizDispatch({
            type : "NEXT_QUESTION"
        })
    }else{
        quizDispatch({
            type : "SUBMIT"
        });
        navigate('/result');
    } 
  }

  const quitHandle = () =>{
    quizDispatch({
        type : 'QUIT',
    })
    navigate('/')
  }

  const optionSelectHandle = (optionId,isCorrect) =>{
    quizDispatch({
        type : "SET_SELECTED_OPTION",
        payload : {optionId,isCorrect}
    })
  }

  return (
    <main className="d-flex justify-center qns-main">
        <section className="question-dialog container-flex">
            <h2 className="d-flex justify-center qns-title">{title}</h2>
            <div className='qsn_scr'>
                <span>Question : {index+1}/{quiz.length}</span>
                <span className="score">Score : {score}</span>
            </div>
            <div className="question">
                <span>Q{index+1} : {quiz[index]?.question}</span>
            </div >
            <div className="options-box">
                {quiz[index]?.options.map(({id,isCorrect,option}) => 
                <button 
                    key={id} 
                    onClick={() => optionSelectHandle(id,isCorrect)}
                    className={`button option d-flex justify-center ${selectedOption && isCorrect ? "success" : ""} ${selectedOption && selectedOption === id && !isCorrect ? "error" : ""}`} 
                    disabled={selectedOption!==null}
                >
                    {option}
                </button>)}
            </div>
            <div className="nxt-btn-container">
                <div>
                    <button onClick={quitHandle} className="play-btn button btn-secondary cursor">Quit</button>
                    <button onClick={handleNextQuestion} className="nxt-qstn play-now-btn button btn-primary cursor">{index < quiz.length-1 ? "Next" : "Submit"}</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Questions