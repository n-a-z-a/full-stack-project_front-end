import { Link } from 'react-router-dom';
import Track from "../../components/Track/Track";
import Button from "../../components/Button/Button";
import SearchBox from '../../components/SearchBox/SearchBox';
import "./Tracklist.scss";

const Tracklist = (props) => {

  const tracksJSX = props.tracks.map(track => {
  return <Track key={track.trackId} track={track}/>})

  let searchResultText = props.searchCount === 1 ? 'Found 1 track' : `Found ${props.searchCount} tracks`

  return (
    <>
      <h2 className="heading">My Favourite Tracks</h2>
      <SearchBox 
        label="Title"
        searchTerm={props.searchTitle} 
        handleInput={props.handleTitleInput}
        placeholder="Search tracks by title"
      />
      <SearchBox
        label="Artist"
        searchTerm={props.searchArtist} 
        handleInput={props.handleArtistInput}
        placeholder="Search tracks by artist"
      />
      <SearchBox
        label="Genre"
        searchTerm={props.searchGenre} 
        handleInput={props.handleGenreInput}
        placeholder="Search tracks by genre"
      />
      <p className='results-message'>{searchResultText}</p>
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