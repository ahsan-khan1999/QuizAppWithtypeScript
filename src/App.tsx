import React, { useEffect, useState } from 'react';
import { QuestionState, getQuestions } from './service/api';
import './App.css';
import Questions from './Components/Questions';

function App() {


  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);


    let questions = await getQuestions(5, 'hard');
    console.log(questions);
    setQuestions(questions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(score => score +1);
      const answerObject = {
        question:questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer
      };
      setUserAnswers(prev=> [...prev,answerObject]);
    }
  }
  const nextQuestion = () => {
    const nextQuestion = number +1;
    if(nextQuestion !== 5){
      setNumber(nextQuestion);
    }
    else{
      setGameOver(true);
    }
  }
  return (
    <div className="App">
      <h1>Type Script Quiz App</h1>
      {
        gameOver || userAnswers.length === 5 ?
          <button className="begin" onClick={startQuiz}>Start Quiz</button> : null
      }

    {!gameOver ? <h4 className='score'>Score : {score}</h4> : null}
      {loading ? <h2>Loading Question .....</h2> : null}
      {!loading && !gameOver ? <Questions questionNumber={number + 1} totalQuestions={5} question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer} /> : null}
      {!loading && !gameOver && userAnswers.length === number + 1 && number !== 5 ? <button className="next" onClick={nextQuestion}>Next Questions </button> : null}
    </div>
  );
}

export default App;
