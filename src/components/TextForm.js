import React, {useState} from 'react'

export default function TextForm(props){
 
   const handleUpClick = ()=>{
let newtext = text.toUpperCase()
setText (newtext)
 props.showAlert("Converted to UpperCase!", "success");
  }
  
  const handleCopyClick = ()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied!", "success");
    
      }

  const handleClearClick = ()=>{

    let newtext = '';
    setText (newtext)
    props.showAlert("Cleared Text!", "success");
      }

  const handleLoClick = ()=>{
    let newtext = text.toLowerCase()
    setText (newtext)
    props.showAlert("Converted to LowerCase!", "success");
      }
  const handleOnChange = (event)=>{
    setText (event.target.value);
      }
const [text,setText] = useState('Enter text here')
  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark'? 'white': '#032742'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-Control"value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? 'grey': 'white', color: props.mode === 'dark'? 'white': '#032742' }} id ="myBox"rows="8" ></textarea>
          </div>
          <button disabled={text.length===0} className = "btn btn-primary mx-1 my-1" onClick =  {handleUpClick}>Convert to Uppercase </button>
          <button disabled={text.length===0} className = "btn btn-primary mx-1 my-1" onClick =  {handleLoClick}>Convert to Lowercase </button>
          <button disabled={text.length===0} className = "btn btn-primary mx-1 my-1" onClick =  {handleClearClick}>Clear</button>
          <button disabled={text.length===0} className = "btn btn-primary mx-1 my-1" onClick =  {handleCopyClick}>Copy</button>
    </div>
    <div className="container" my-3 style = {{color: props.mode === 'dark'? 'white': '#032742'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Character</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
 