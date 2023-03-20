import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import List from './components/List';
import Nav from './components/Nav';
import Home from './components/Home';
import Stats from './components/Stats';


function App(props) {
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
