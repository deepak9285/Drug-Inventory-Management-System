import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Singnup";
import Home from "./Components/Home"; // Corrected import statement
import LoginSuccessful from "./Components/LoginSuccessful";
import { Routes, Route } from "react-router";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/LoginSuccessful" element={<LoginSuccessful/>}/>
         
      </Routes>
    </div>

  );
}

export default App;
