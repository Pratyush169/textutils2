import './App.css';
import Navbar from './Navbar';
import Textarea from './Textarea';
import React, { useState } from 'react'
import Alerts from './Alerts';
import Abt from './Abt';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [text, setText] = useState("dark");
  const [style,setStyle] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      setText("light");
      document.body.style.backgroundColor = "#363b3f"
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark Mode has been enabled", "success");
      setStyle({backgroundColor:"black"});
    }
    else {
      setmode("light");
      setText("dark");
      document.body.style.backgroundColor = "#dee2e6"
      document.title = "TextUtils - Light Mode";
      showAlert("Light Mode has been enabled", "success");
      setStyle({backgroundColor:"white"});
    }
    setTimeout(() => {
      showAlert(null);
    }, 1000);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About US" mode={mode} toggle={toggle} text={text} />
        <Alerts alert={alert} />
        <div className={`container my-3 text-${text}`}>
          <Routes>
            <Route path='/about' element={<Abt mode={mode} text={text} style={style}/>}/>
            <Route path='/home' element={<Textarea heading="Welcome to TextUtils :- The Best Text Editor App" mode={mode} showAlert={showAlert} />}/>
            <Route path='/' element={<Textarea heading="Welcome to TextUtils :- The Best Text Editor App" mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
