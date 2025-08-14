import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState("light")
  const toggle=()=>{
    if(mode=="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }
    else if(mode=="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }

  }
  return (
    <>
    <Navbar mode={mode} toggle={toggle}></Navbar>
    <Textarea mode={mode}></Textarea>
    <Footer mode={mode}></Footer>
    </>
  );
}

export default App;
