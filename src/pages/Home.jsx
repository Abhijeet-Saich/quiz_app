import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios';

import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";
import '../css_files/home.css';


const Home = () => {

  const [quizzes,setQuizzes] = useState([]);

  useEffect(()=>{

    (async ()=>{

      try {
        const {data} = await axios.get("https://cute-puce-beaver-coat.cyclic.app/categories");
        setQuizzes([...data.data]);
      } catch (error) {
        console.log(error.message);
      }
    })()

  },[])

  return (
    <div>
      <Navbar route={"home"}/>
      <main className="main d-flex wrap gap-md align-center justify-center">
          {quizzes.length !== 0 && quizzes.map((ele,i) => <QuizCard key={i} quizData={ele}/>) }
      </main>
    </div>
  );
};

export default Home;
