
import React, {useState} from 'react';
import './App.css';
import About from './Components/about';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[mode,setmode]=useState('light')
  const[alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1000)
  }
  const togglemode=()=>{
    if(mode==='light' || mode==='green'){
    setmode('dark')
    document.body.style.backgroundColor='grey'
    showalert("dark mode has been enabled","success")
     document.title="textters-dark mode"//ye jab bhi ham mode chamge krenege to upr tab name me likha ayygea
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("light mode has been enabled","success")
       document.title="textters-light mode"//ye jab bhi ham mode chamge krenege to upr tab name me likha ayygea
       
    }
  }

  const togglemode1=()=>{
    if(mode==='light' || mode==='dark'){
    setmode('success')
    document.body.style.backgroundColor='#98FF98'
    showalert("green mode has been enabled","success")
     document.title="textters-green mode"//ye jab bhi ham mode chamge krenege to upr tab name me likha ayygea
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("light mode has been enabled","success")
      document.title="textters-light mode"//ye jab bhi ham mode chamge krenege to upr tab name me likha ayygea
    }
  }
    return (
    <>
      <Router>
        <Navbar title="Jains" about="About Jains" mode={mode} togglemode={togglemode} togglemode1={togglemode1}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={
              <Textform showalert={showalert} heading="enter text to analyze below" mode={mode}/>
              }
              /> 
          </Routes>
        </div>
      </Router>
    </>
  );  
}

export default App;
