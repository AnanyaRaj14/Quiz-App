import React, { useState } from 'react'
import { value } from '../assets/value'
const Quiz = () => {

  const [index, setIndex] = useState(1);
  const [question, setQuestion] = useState(value[index]);

  const checkAns = (e,ans) => {
      if(question.ans === ans){
        
      }
  }

  return (
    <>
      <div className='flex flex-col items-center bg-slate-50 gap-5 m-auto mt-40 p-10 rounded-xl w-2/3'>
        <h1 className='text-3xl font-extrabold'>Quiz App</h1>
        <hr />
        <h2 className='text-lg font-bold'>{index}. {question.question}</h2>
        <ul className='grid grid-cols-2 gap-4 items-center text-lg cursor-pointer w-3/4'>
            <li className='h-10 p-2 border-2 border-black w-full gap-3 pl-4 pr-4 mt-4'>{question.option1}</li>
            <li className='h-10 p-2 border-2 border-black w-full gap-3 pl-4 pr-4 mt-4'>{question.option2}</li>
            <li className='h-10 p-2 border-2 border-black w-full gap-3 pl-4 pr-4 mt-4'>{question.option3}</li>
            <li className='h-10 p-2 border-2 items-center border-black gap-3 pl-4 pr-4 mt-4 w-full'>{question.option4}</li>
        </ul>
        <button className='w-24 p-1 border-2 border-black bg-gray-400 mt-3 mb-3 text-lg font-bold'>Next</button>
        <p>{index} of 10 questions visited</p>
      </div>
    </>
  )
}

export default Quiz
