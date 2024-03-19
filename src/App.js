import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import {useState} from "react";
import { useRef } from "react";


function App() {
  const[isclicked,setisClicked] = useState(true);
  const[hours,setHours] = useState(0);
  const[minutes,setMinutes] = useState(0);
  const[seconds,setSeconds] = useState(0);
  const[tid,setTid] = useState(0)

const handleinput = (e) => {
  const classe = e.target.className;
  const iput = parseInt(e.target.value);

  if(classe === 'Hour'){
    setHours(iput);
  }
  if(classe === "Minute"){
    setMinutes(iput);
  }
  if(classe === "Second"){
    setSeconds(iput);
  }
}
console.log(hours,minutes,seconds)

const Decrease = (seconds, hours, minutes, isclicked) => {
  if(seconds>0){
    setSeconds(seconds-1)
  }
   if(minutes>0 && seconds===0){
    setMinutes(minutes-1);
    setSeconds(59)
  }
  if(hours>0 && minutes===0){
    setHours(hours-1);
    setMinutes(59)
    setSeconds(59)
  }
}

useEffect(() => {
  if (!isclicked) {
    const intervalId = setInterval(() => {
      Decrease(seconds, hours, minutes, isclicked);
    }, 1000);

    setTid(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }
}, [seconds, hours, minutes, isclicked]);



  return (
    <div className="full">
      
      <h1>Countdown Timer.</h1>
      {isclicked && 
      <div className="skeleton">
        <input onChange={handleinput}
         type="text" className="Hour" placeholder="HH" />
      
        <input type="text" onChange={handleinput} className="Minute" placeholder="MM" />
        <input type="text" onChange={handleinput} className="Second" placeholder="SS" />
        <button className="button" onClick={()=>setisClicked(!isclicked)}>Start</button>
      </div>}
      
      {/* second one */}
      {!isclicked &&
      <div className="second3">
        <p>
          {hours}<span>:</span>
        </p>
        <p>
          {minutes}<span>:</span>
        </p>
        <p>{seconds}</p>
        <button    className="pause">
          Pause
        </button>
        <button onClick={()=>setisClicked(!isclicked)} className="reset">
          Reset
        </button>
      </div>}
    </div>
    
  );
}

export default App;
