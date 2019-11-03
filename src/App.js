import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DashBoard from "./dashboard";

function App() {
  return (
    <div className="App">
        <DashBoard initialUrl="https://pokeapi.co/api/v2/pokemon/?limit=3&offset=0">Loading...</DashBoard>
        {/* <DashBoard initialUrl="https://www.brajalal.com">Loading...Brajalal.com</DashBoard> */}
    </div>
  );
}

export default App;
