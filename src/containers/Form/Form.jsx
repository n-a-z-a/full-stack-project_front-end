import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from "../../components/Button/Button";
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
    fetch('https://full-stack-project-back-end-u4cjn37neq-nw.a.run.app/track', {
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

    <div className="form">
      
      <div className="form__topline">
      <h1 className="form__topline--heading1">My favourite tracks</h1>

      <div className="form__topline--links">

      <Link to="/">
        <Button 
          key="home" 
          buttonText="Home" 
          type="submit" 
          buttonStyle="button-secondary"/>
      </Link>

      <Link to='/tracklist'>
        <Button 
          key="tracklist" 
          buttonText="show tracks" 
          type="submit" 
          buttonStyle="button-secondary"/>
      </Link>
      </div>

      </div>

      <h2 className="form__heading2">Add A New Track</h2>

      <form onSubmit={handleSubmit} className="form__main">

        <label 
          htmlFor="title" 
          className="form__main--field">title
        <input
           required type="text" 
           onInput={(e) => setTrack({ ...track, title: e.target.value })} 
          className="form__main--field-input"/>
        </label>

        <label 
          htmlFor="artist" 
          className="form__main--field">artist
        <input 
          required type="text"  onInput={(e) => setTrack({ ...track, artist: e.target.value })} 
          className="form__main--field-input" />
        </label>

        <label 
          htmlFor="genre" 
          className="form__main--field">genre
        <input 
          type="text"  onInput={(e) => setTrack({ ...track, genre: e.target.value })} 
          className="form__main--field-input"/>
        </label>

        <Button 
          key="submit" 
          buttonText="Submit" 
          type="submit" 
          buttonStyle="button-submit"/>
      </form>

    </div>
  );
}

export default Form;