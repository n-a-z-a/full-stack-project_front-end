import "./Tracklist.scss";
import Track from "../../components/Track/Track";


const Tracklist = (props) => {
  const tracksJSX = props.tracks.map(track => {
    console.log(track.trackId)
  return <Track key={track.trackId} track={track}/>})
  return (
    <>
      <h2 className="heading">My Favourite Tracks</h2>
      <div className="container">
        {props.tracks && tracksJSX}
      </div>
    </>
  )
}

export default Tracklist