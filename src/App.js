
import './App.css';
import { useState } from 'react';

function App() {
  
    const [weight,setWeight]=useState(0)
    const [gsm,setGSM]=useState(0)
    const [wid,setWid]=useState(0)
    const [hi,setHI]=useState(0)
    // const [l,setL]=useState(0)
    const [lay,setLAY]=useState(1)
    function gs(){
        var sqr=0
        sqr=(wid*hi*lay)/10000
        setWeight(gsm*sqr)
    }
  return (
    <div className="App">
      <br></br>
      <br></br>
            <h1>RCBalaji's Smart Grams Calculater</h1>
            
            <br></br><label>Width:</label>
            <input  onChange={(event)=>
            setWid(event.target.value)}></input>
            <br></br><br></br><label>Height:</label>
            <input onChange={(event)=>
            setHI(event.target.value)} ></input><br></br>
            <br></br>
            <label >GSM:</label>
            <input onChange={(event)=>
            setGSM(event.target.value)} ></input>
            <br></br>

          <br></br><label>Layer unit:</label>
            <input  onChange={(event)=>
            setLAY(event.target.value)} ></input>
            <br></br><br></br><button id='btn' onClick={gs}>Calculate</button>
            <br></br><br></br>Weight:{weight}
    </div>
  );
}

export default App;
