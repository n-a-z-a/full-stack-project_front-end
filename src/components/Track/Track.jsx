import "./Track.scss";

const Track = (props) => {
  const {
    title,
    artist,
    genre,
    dateCreated
  } = props.track;

  return (
    <div className="track">
      <h3>{title}</h3>
      <p>By {artist}</p>
      <p>Genre: {genre}</p>
      <p>Added on: {dateCreated}</p>
    </div>
  )
}

export default Track