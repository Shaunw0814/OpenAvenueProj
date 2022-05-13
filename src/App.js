//import logo from './logo.svg';
import './App.css';
import React from "react";
import Resturantapi from './resturantapi';
import Navbar from './navbar';

function App() {
  return(
    <div className="App">
      <Navbar/>
      <div>        
        <Resturantapi/>
      </div>
    </div>
  );

}

export default App;
