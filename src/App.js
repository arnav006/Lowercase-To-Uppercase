// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App(props) {
  const[Mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#032742';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'light';
    }
    
  }
  return (
   <>
     <Navbar title ="textUtils " mode = {Mode} toggleMode = {toggleMode}/>
     
     <div className="container my-3" >
     <TextForm heading = "Enter The Text Analyze" mode = {Mode}/>
    {/* <About/> */}
     </div>
   </>
    
  );
}

export default App;
