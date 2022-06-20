import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import "./Form.scss";

const Form = () => {
  const [track, setTrack] = useState({
    title: "",
    artist: "",
    genre: "",
    addedOn: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(track)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
  }

  return (
    <div className="log-form">
      <h2>Add A New Track</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title
        <input required type="text" placeholder="Title" onInput={(e) => setTrack({ ...track, title: e.target.value })} />
        </label>
        <label htmlFor="">Artist
        <input required type="text" placeholder="Artist" onInput={(e) => setTrack({ ...track, artist: e.target.value })} />
        </label>
        <label htmlFor="">Genre
        <input type="text" placeholder="Genre" onInput={(e) => setTrack({ ...track, genre: e.target.value })} />
        </label>
        <Button key="submit" buttonText="Submit" type="submit"/>
      </form>
      <Link to="/">
      <Button key="home" buttonText="Home" type="submit"/>
      </Link>
      <Link to='/tracklist'>
      <Button key="tracklist" buttonText="show tracks" type="submit"/>
      </Link>
    </div>
  );
}

export default Form;