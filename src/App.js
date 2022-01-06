// import About from './About';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "<b>Rahul Kumar Mishra</b>";   //name is not be bold but it will be as it is
// let name = "Rahul Kumar Mishra";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#222222';
      showAlert("Dark Mode is Enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
    }
  }
  return (
      <>
        <Navbar title="TextConverter" aboutText="about" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <TextForm showAlert={showAlert} heading="Enter text below to perform operations" mode = {mode}/>
          {/* <About/> */}
        </div>
      </>
  );
}

export default App;
