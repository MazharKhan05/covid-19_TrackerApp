import React,{useState,useEffect} from 'react';
import DataFetch from './components/DataFetch'
import "bootstrap/dist/css/bootstrap.min.css"
import moonMode from './Media/moonMode.png'
import sunMode from './Media/sunMode.png'
import {Switch} from 'antd'
import 'antd/dist/antd.css'
import './App.css';
import { findByLabelText } from '@testing-library/react';

const App = ()=>{
  const [isDark,setIsDark] = useState(false);

useEffect(()=>{
  const initValue = localStorage.getItem("theme")
  
  setIsDark(JSON.parse(initValue))
},[])

  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(isDark));
    
    
  },[isDark])

  
  
  const themeToggler =()=>{
    setIsDark(!isDark)
  }
  

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className={isDark ? "darkMode" : "lightMode"}>
      <h2 className={isDark ? "text-center font-weight-bold text-warning" : "text-center font-weight-bold text-primary"}>Covid-19 Tracker App.</h2>
      <div className="darkTheme">
      <h4 className={isDark ? "text-white" : "text-dark"}>Theme switcher</h4>
      {isDark ? (<img alt="dark" src= {moonMode}/>) : (<img  alt="light" src ={sunMode}/>)}
      <Switch onClick={themeToggler} className=" mt-1 content"/>
      </div>
      <DataFetch />
    </div>
    </div>
  );
}

export default App;
