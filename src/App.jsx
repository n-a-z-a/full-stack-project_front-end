import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from "./containers/Home/Home";
import Tracklist from "./containers/Tracklist/Tracklist";
import Form from "./components/Form/Form";

const App = () => {

  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    getTracks();
  }, [tracks]);

  const getTracks = () => {
    fetch("http://localhost:8080/tracks")
      .then(res => res.json())
      .then(json => setTracks(json))
      .catch(err => console.log(err))
  }
  

  return (
    <div  className="app">
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tracklist" element={<Tracklist tracks={tracks}/>}/>
      <Route path="/addatrack" element={<Form/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
