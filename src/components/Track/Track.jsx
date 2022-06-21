import "./Track.scss";
import Button from "../Button/Button";

const Track = ({track}) => {
  const {
    trackId,
    title,
    artist,
    genre,
    dateCreatedFormatted
  } = track;

  const handleDelete = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8080/track/${trackId}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
  }


  return (
    <div className="track">
      <h3>{title}</h3>
      <p>By {artist}</p>
      <p>Genre: {genre}</p>
      <p>Added on {dateCreatedFormatted}</p>
      <Button 
        key="deletrack" 
        buttonText="Delete" 
        type="submit"
        onClickEvent={handleDelete}
        />
    </div>
  )
}

export default Track