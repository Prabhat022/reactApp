import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null)
    }, 1500)
  }
  const handleMode = () => {
    if(mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#1A355B"
      showAlert("Dark mode is enabled.", "success")
      document.title = "TextUtils - Dark mode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled.", "success")
      document.title = "TextUtils - Light mode"
    }
  }

  return (
    <>
      <Navbar title="LearningReact" mode={mode} handleMode={handleMode} />
      {/* <Navbar  /> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Router>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text to analyze" mode={mode}/>} />
              {/* <TextForm showAlert={showAlert}  heading="Enter the text to analyze" mode={mode}/> */}
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
