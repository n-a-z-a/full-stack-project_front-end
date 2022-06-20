import { Link } from 'react-router-dom';
import Track from "../../components/Track/Track";
import Button from "../../components/Button/Button";
import "./Tracklist.scss";

const Tracklist = (props) => {

  const tracksJSX = props.tracks.map(track => {
  return <Track key={track.trackId} track={track}/>})

  return (
    <>
      <h2 className="heading">My Favourite Tracks</h2>
      <div className="container">
        {props.tracks && tracksJSX}
      </div>
      <Link to="/">
        <Button key="home" buttonText="Home" type="submit"/>
      </Link>
      <Link to='/addatrack'>
        <Button key="addatrack" buttonText="add a track" type="submit"/>
      </Link>
    </>
  )
}

export default Tracklist