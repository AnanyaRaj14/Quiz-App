import React, { useState, useEffect } from 'react'
import { value } from '../assets/value'
const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(value[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  

  useEffect(() => {
    setTimeLeft(10);
    setLock(false);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if(prevTime<=1){
          setLock(true);
          nextQuestion();
          return 0;
        }
        return prevTime-1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [index]);


  const checkAns = (e,ans) => {
      if(lock===false){
        const correct = question.ans === ans;
        e.target.className = correct ? 'bg-green-500 p-2 mt-2 border-3 border-green' : 'bg-red-500 p-2 border-3 border-red';
        setLock(true);
        if(correct) setScore(score+1);
      }
  };

  const nextQuestion = () => {
    if(index < value.length-1){
      setIndex(index+1);
      setQuestion(value[index+1]);
      setLock(false);
    }else{
      alert(`Quiz is finished... Your score is ${score}/${value.length}`);
    }
  };

  return (
    <>
      <div className='flex flex-col items-center bg-slate-50 gap-5 m-auto mt-40 p-10 rounded-xl w-2/3'>
        <h1 className='text-3xl font-extrabold'>Quiz App</h1>
        <hr />
        <p>Time Left : {timeLeft} seconds</p>
        <h2 className='text-lg font-bold'>{index+1}. {value[index].question}</h2>
        <ul className='grid grid-cols-2 gap-4 items-center text-lg cursor-pointer w-3/4'>
            <li onClick={(e)=>{checkAns(e,1)}} className='h-10 p-2 border-2 border-black w-full gap-3 pl-4 pr-4 mt-4'>{value[index].option1}</li>
            <li onClick={(e)=>{checkAns(e,2)}} className='h-10 p-2 border-2 border-black w-full gap-3 pl-4 pr-4 mt-4'>{value[index].option2}</li>
            <li onClick={(e)=>{checkAns(e,3)}} className='h-10 p-2 border-2 border-black w-full gap-3 pl-4 pr-4 mt-4'>{value[index].option3}</li>
            <li onClick={(e)=>{checkAns(e,4)}} className='h-10 p-2 border-2 items-center border-black gap-3 pl-4 pr-4 mt-4 w-full'>{value[index].option4}</li>
        </ul>
        <button 
          className='w-24 p-1 border-2 border-black bg-gray-400 mt-3 mb-3 text-lg font-bold'
          onClick={nextQuestion}
          // disabled={lock}
        >
          Next
        </button>
        <p>{index+1} of 10 questions visited</p>
      </div>
    </>
  )
}

export default Quiz
