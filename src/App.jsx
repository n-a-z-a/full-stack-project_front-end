import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from "./containers/Home/Home";
import ShowTracks from "./containers/ShowTracks/ShowTracks";
import AddTrack from "./containers/AddTrack/AddTrack";

const App = () => {

  return (
    <div  className="app">
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/showtracks" element={<ShowTracks/>}/>
      <Route path="/addatrack" element={<AddTrack/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
