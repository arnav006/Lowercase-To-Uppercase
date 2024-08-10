import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



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
     <Router>
     <Navbar title ="textUtils " mode = {Mode} toggleMode = {toggleMode}/>
      <Alert alert= {alert}/>
     <div className="container my-3" >
    
      <Switch>
      <Route exact path="/about">
        <About />
      
      
       </Route>
       <Route exact path="/">
       <TextForm showAlert={showAlert} heading = "Enter The Text Analyze" mode = {Mode}/>
     
      </Route>
    </Switch>
    
     
</div>
</Router>
   </>
    
  );
}

export default App;
