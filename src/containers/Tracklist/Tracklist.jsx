import "./Tracklist.scss";
import Track from "../../components/Track/Track";

const Tracklist = (props) => {

  

  return (
    <>
      <h2 className="heading">My Favourite Tracks</h2>
      <div className="container">
        {props.tracks && props.tracks.map(track => <Track key={track.id} track={track} />)}
      </div>
    </>
  )
}

export default Tracklist