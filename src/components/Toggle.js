import React from "react";
import {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "white"
  function handleBtn(){
   setIsOn((isOn)=> !isOn)
    
  }
  return <button onClick={handleBtn} style={{background: color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
