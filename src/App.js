import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App(props) {
  return (
   <>
     < navbar title ="textUtils "/>
     
     <div className="container my-3" >
     <TextForm heading = "Enter The Text Analyze"/>
     </div>
   </>
    
  );
}

export default App;
