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

      <h3 className="track__title">{title}</h3>
      <p className="track__info">by {artist}</p>
      <p className="track__info">genre: {genre}</p>
      <p className="track__info">added on {dateCreatedFormatted}</p>

      <Button 
        buttonStyle="button-delete"
        key="deletrack" 
        buttonText="Delete" 
        type="submit"
        onClickEvent={handleDelete}
        />

    </div>
    
  )
}

export default Track