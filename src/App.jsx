import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from "./containers/Home/Home";
import Tracklist from "./containers/Tracklist/Tracklist";
import Form from "./containers/Form/Form";

const App = () => {

  const [tracks, setTracks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchArtist, setSearchArtist] = useState("");
  const [searchGenre, setSearchGenre] = useState("");
  
  useEffect(() => {
    getTracks();
  }, [tracks]);

  const getTracks = () => {
    fetch("http://localhost:8080/tracks")
      .then(res => res.json())
      .then(json => setTracks(json))
      .catch(err => console.log(err))
  }
  
  const handleTitleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTitle(cleanInput)
    console.log(cleanInput)
  } 

  const handleArtistInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchArtist(cleanInput)
    console.log(cleanInput)
  }

  const handleGenreInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchGenre(cleanInput)
    console.log(cleanInput)
  }

  const filteredTracks = tracks.filter(track => {
    const trackTitleLower = track.title.toLowerCase();
    const trackArtistLower = track.artist.toLowerCase();
    const trackGenreLower = track.genre.toLowerCase();
    return trackTitleLower.includes(searchTitle) && trackArtistLower.includes(searchArtist) && trackGenreLower.includes(searchGenre)
})

  return (
    <div  className="app">
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tracklist" 
        element={<Tracklist 
        tracks={filteredTracks} 
        searchTitle={searchTitle} 
        searchArtist={searchArtist}
        handleTitleInput={handleTitleInput} 
        handleArtistInput={handleArtistInput}
        handleGenreInput={handleGenreInput}
        searchCount={filteredTracks.length}
      />}/>
      <Route path="/addatrack" element={<Form/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
