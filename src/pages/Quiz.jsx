import React,{Fragment, useEffect} from 'react';
import axios from 'axios';
import { useQuiz } from '../context/quizContext';

import Navbar from '../components/Navbar';
import Questions from '../components/Questions';

const Quiz = () => {

  const {quiz,quizCategory,quizDispatch} = useQuiz();
  const qc = quizCategory || localStorage.getItem("category");

  useEffect(()=>{

    (async ()=>{

      try {

        const {data} = await axios.get("https://cute-puce-beaver-coat.cyclic.app/categories");
        const data_arr = [...data.data]
        const filteredData = data_arr.filter((ele) => qc === ele.category);

        if(filteredData.length > 0){
          quizDispatch({
            type : "SET_QUIZ",
            payload : filteredData
          })
        }

      } catch (error) {
        console.log(error.message);
      }
    })()

  },[])

  return (
    <Fragment>
      <Navbar />
      {quiz && quiz.length > 0 && <Questions quizData={quiz} />}
    </Fragment>
  )
}

export default Quiz