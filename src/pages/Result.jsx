import React,{Fragment} from 'react';
import { useQuiz } from '../context/quizContext';
import Navbar from '../components/Navbar';
import '../css_files/result.css'

const Result = () => {

  const {score} = useQuiz()

  return (
    <Fragment>
      <Navbar route="result" />
      <main className="results d-flex direction-column align-center justify-center">
        <h2>Result</h2>
        <div>
          <span>Your score is {score} 🍕🍕</span>
        </div>
      </main>
    </Fragment>
  )
}

export default Result