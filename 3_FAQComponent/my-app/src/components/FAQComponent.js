import React from 'react'
import QuestionAnsComp from './QuestionAnsComp'
import "./QuestionAnsComp.css"
const FAQComponent = () => {
    const list=[
        {
          question: "How many bones does a cat have?",
          answer: "A cat has 230 bones - 6 more than a human",
        },
        {
          question: "How much do cats sleep?",
          answer: "The average cat sleeps 12-16 hours per day",
        },
        {
          question: "How long do cats live",
          answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        },
      ]
  return (
    <div className='faq'>{list.map((ele,index)=>
    {
       return <QuestionAnsComp question={ele.question} answer={ele.answer} key={index}/>
    })}</div>
  )
}

export default FAQComponent