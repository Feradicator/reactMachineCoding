import React, { useState, useEffect } from 'react';
import './countdown.css'
const Countdown = () => {
  const [hour, sethour] = useState()
  const [minute, setminute] = useState()
  const [second, setsecond] = useState()
  const [timeleft, settimeleft] = useState(0);
  const [isRuuning, setisRuuning] = useState(false)
  const [isPause, setisPause] = useState(false)

  useEffect(() => {
    let timer;
    if (isRuuning && timeleft > 0 && !isPause) {
      timer = setInterval(() => {//timer variable reference to setinterval and is used when we need to clear interval,setinterval do change in settimeleft which 
                                // triggers a re-render,before re-rendering useeffects return is called where we clear interval
        settimeleft((prev) => prev - 1);
      }, 1000);
      
    } else if (timeleft <= 0) {
      setisRuuning(false);
    }

    // Cleanup function to clear the interval
    return () => {
      clearInterval(timer);
    };
  }, [isRuuning, timeleft,isPause]);
  const startHandler=()=>
  {
     let time= Number(hour) * 3600 + Number(minute) * 60 + Number(second);
     settimeleft(time);
     setisRuuning(true);
  }
  const pauseHandler=()=>
  {
    setisPause(true);
  }
  const resumeHandler=()=>
  {
    setisPause(false);
  }

  return (
    <div className='countdown'>
      <h1>Countdown</h1>
      {!isRuuning && (
         <div className='setTime'>
         <input type="number" value={hour} onChange={(e)=>sethour(e.target.value)} placeholder='hh'></input>
         <input type="number" value={minute} onChange={(e)=>setminute(e.target.value)} placeholder='mm' ></input>
         <input type="number" value={second} onChange={(e)=>setsecond(e.target.value)} placeholder='ss' ></input>
         <button onClick={startHandler}>start</button>
       </div>
      )}
     {isRuuning && (
  <div className="time">
    <span>{Math.floor(timeleft / 3600)}</span> : {/* Hours */}
    <span>{Math.floor((timeleft % 3600) / 60)}</span> : {/* Minutes */}
    <span>{timeleft % 60}</span> {/* Seconds */}
    
    {!isPause ? (<button onClick={pauseHandler} >Pause</button>):(<button onClick={resumeHandler} >Resume</button>)}
    <button onClick={()=>{
      setisRuuning(false)
      setisPause(false)
    }}>Reset</button>
  </div>
)}


   
      
    </div>
  )
}

export default Countdown
