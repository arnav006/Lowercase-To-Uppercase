// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App(props) {
  return (
   <>
     <Navbar title ="textUtils "/>
     
     <div className="container my-3" >
     <TextForm heading = "Enter The Text Analyze"/>
    {/* <About/> */}
     </div>
   </>
    
  );
}

export default App;
