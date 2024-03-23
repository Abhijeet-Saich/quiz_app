import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/quizContext';
import { useAuth } from '../context/authContext';
import '../css_files/quizCard.css';





const QuizCard = ({quizData}) => {

  const navigate = useNavigate();
  const {token:t,authDispatch} = useAuth();
  const {quizDispatch} = useQuiz();

  const {image, title, description, category} = quizData;
  const token = localStorage.getItem('token') || t;

  const handleStartNow = () =>{
    if(token){
      quizDispatch({
        type : 'CATEGORY',
        payload : category
      })
      localStorage.setItem('category',category)
      navigate('/quiz');
    }else{
      navigate('/login')
    }
  }

  return (
    <div className='container d-flex direction-column'>
        <div className='img-box'>
            <img src={image} alt='image' className='img'/>
        </div>
        <div className="details">
            <h3 className='title'>{title}</h3>
            <p>{description}</p>
        </div>
        <button className='button play-now-btn btn-primary cursor' onClick={handleStartNow}>Start</button>
    </div>
  )
}

export default QuizCard