import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/TextForms";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForms from "./components/TextForms";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#3a3b3c";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Hype-TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForms
                  showAlert={showAlert}
                  heading="Try TextUtils- Word Counter , Character Counter"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
