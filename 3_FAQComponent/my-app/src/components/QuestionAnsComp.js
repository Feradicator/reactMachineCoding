import React,{ useState }  from 'react'
import "./QuestionAnsComp.css"
const QuestionAnsComp = (props) => {
    const [check, setcheck] = useState(false)
    
  return (
    <div className='quesAns'>
        <div className='question' onClick={()=>setcheck(prev=>!prev)}>{props.question}</div>
        {check && (
            <div className='answer'>{props.answer}</div>
        )}
        

    </div>
  )
}

export default QuestionAnsComp