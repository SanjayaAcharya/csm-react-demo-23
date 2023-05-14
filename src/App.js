import { useEffect, useState } from 'react';
import './App.css';
import Header from './common/header/header';

function App() {
  const [myState, setMyState] = useState(1)
  const [myState1, setMyState1] = useState("My CSM")
  const [hideHeader, setHideHeader] = useState(false)
  useEffect(()=>{
    console.log("Life Cycle::::: Created");
    
  },[])
  useEffect(()=>{
    console.log("Life Cycle::::: Update");
  })
  useEffect(()=>{
    console.log("Life Cycle:::myState:: Update");
  },[myState, myState1])
  

  return (
    <>
    
    {myState}{myState1}
      <button onClick={()=>{setMyState(myState+1)}}>Click</button>
      <button onClick={()=>{setHideHeader(false)}}>Hide Header</button>
      
      <br/><br/><br/><br/>
      {!hideHeader && <Header title="Home Page" desc="My Home page content" />}
    </>
  );
}

export default App;