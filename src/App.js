import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Alert from "./components/Alert";


function App() {
  const [mode, setmode] = useState("light");
  //    const [alert, setAlert] = useState(null);
  //    const showAlert = (message , type)=>{
  // setAlert({
  //   msg: message,
  //   type: type
  // })
  //    }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      // showAlert("Dark mode has been enabled","success");
      document.title = "Textutils - Dark mode";
      // setInterval(() => {
      //   document.title = "Textutils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now";
      // }, 1000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled","success");
      document.title = "Textutils - Light mode";
    }
  };
  return (
    <>
      {/* <Navbar title="Ankur" abouttext="about Ankur"/> */}
      {/* <Navbar /> */}
      <Navbar title="Ankur" mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert={alert}/> */}
      {/* <Router> */}
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/"> */}
              <Textform heading="Enter text here to analyse " mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
