import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" //import router to be able to switch between pages
import Random from "./Components/Random"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import "./App.css"



function App(){
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path = "/" Component = {Home}/>
          <Route exact path = "/random" Component ={Random} />
        </Routes> 
      </div>
      <footer>
      &copy; 2023 Matthew Low 
      </footer>
    </Router>
  )
  

}

export default App;