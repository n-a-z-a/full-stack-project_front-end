import { Link } from 'react-router-dom';
import Track from "../../components/Track/Track";
import Button from "../../components/Button/Button";
import SearchBox from '../../components/SearchBox/SearchBox';
import "./Tracklist.scss";

const Tracklist = (props) => {

  const tracksJSX = props.tracks.map(track => {
  return <Track key={track.trackId} track={track}/>})

  let searchResultText = props.searchCount === 1 ? 'You have 1 track' : `You have ${props.searchCount} tracks`

  return (
    <div className='tracklist'>
      <div className='tracklist__topline'>
      <h2 className="tracklist__topline--heading">My Favourite Tracks</h2>


      <div className='tracklist__topline--links'>
      <Link to="/">
        <Button key="home" buttonText="Home" type="submit" buttonStyle="button-secondary"/>
      </Link>
      <Link to='/addatrack'>
        <Button key="addatrack" buttonText="add a track" type="submit" buttonStyle="button-secondary"/>
      </Link>
      </div>
      </div>
      <div className='tracklist__searchboxes'>
      <h2 className='tracklist__searchboxes--heading'>Search tracks</h2>
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
      </div>
      <p className='tracklist__output'>{searchResultText}</p>
      <div className="tracklist__tracks">
        {props.tracks && tracksJSX}
      </div>
    </div>
  )
}

export default Tracklist