// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const[Mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setAlert(null)
     }, 2000);
  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#032742';
      showAlert("Dark Mode Was Enabled","Success")
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'White';
      showAlert("Light Mode Was Enabled", "Success")
    }
    
  }
  return (
   <>
     <Navbar title ="textUtils " mode = {Mode} toggleMode = {toggleMode}/>
      <Alert alert= {alert}/>
     <div className="container my-3" >
     <TextForm showAlert={showAlert} heading = "Enter The Text Analyze" mode = {Mode}/>
    {/* <About/> */}
     </div>
   </>
    
  );
}

export default App;
