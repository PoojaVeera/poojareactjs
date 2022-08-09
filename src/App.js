import * as React from "react";
import "./App.css";
import About from "./pages/about/About";
import Login from './pages/login/Login';
import Homepage from './pages/homepage/Homepage';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">      
      <Routes>
      <Route path='/' element= {<Homepage />} />
      <Route path='/About' element= {<About />} />
      <Route path='/login'element={<Login/>}/>
    </Routes>
  </div>  
  );
}

export default App;
