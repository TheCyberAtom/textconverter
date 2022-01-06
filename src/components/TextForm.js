import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log('uppercase button was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        // console.log('uppercase button was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");
    }

    const handleCapClick = () => {
        // console.log('uppercase button was clicked');
        let temp = text.toLowerCase().split(" ");
        for(let i = 0; i< temp.length; i++){
            temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
        }
        let newText = temp.join(" ");
        setText(newText);
        props.showAlert("converted to capitalize!", "success");
    }

    const handleClearClick = () => {
        // console.log('uppercase button was clicked');
        let newText = '';
        setText(newText);
        props.showAlert("text cleared!", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new Text"; //wrong way to change the state
    // setText("new Text"); //Correct way to change the state
    return (
        <>
        <div className='container my-1' style={{color : props.mode === 'dark'?'white':'#222222'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'#222222', color : props.mode === 'dark'?'white':'#222222'}} id="textBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Convert to Capitalize</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-4" style={{color : props.mode === 'dark'?'white':'#222222'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
            <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} Minutes to read</p>

            <h3>Preview</h3>
            <p>{text.length>0 ?text:'Nothing to preview'}</p>

        </div>
        </>
    )
}
