import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";
import List from './components/List';
import Nav from './components/Nav';
import Home from './components/Home';
import Stats from './components/Stats';

function App(props) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '440d7f76bbmsh4facf782795d9d5p1b51a0jsn6de6932883eb',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://api-nba-v1.p.rapidapi.com/teams/statistics?id=1&season=2020', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



  return (
    <div className="App">
<Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Stats" element={<Stats/>}/>
      </Routes>

    </div>
  );
}

export default App;
