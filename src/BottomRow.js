import React, {useState} from "react";
import "./App.css";
import App from "./App";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(0);
  const [down, setDown] = useState(3);
  const [toGo, setToGo] = useState(7);
  const [ballOn, setBallOn] = useState(21);

  const quarterSetter = () => {
      if (quarter < 4){
        setQuarter(quarter + 1)
      }
      else {
        setQuarter(0)
      }
  }

  const downSetter = () => {
    if (down < 4) {
      setDown(down + 1)
    }
    else{
      setDown(0)
    }
  }

  const yardsToGo = () => {
    if (toGo < 10){
      setToGo(toGo + 1)
    }
    else{
      setToGo(0)
    }
  }

  const lineOfScrimmage = () => {
    if (ballOn < 100){
      setBallOn(ballOn + 1)
    }
    else{
      setBallOn(0)
    }
  }

  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={downSetter} className="button">Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <button onClick={yardsToGo} className="button">Yards Increased</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button onClick={lineOfScrimmage} className="button">Yards Increased</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={quarterSetter} className="button">Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
