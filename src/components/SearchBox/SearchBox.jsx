import React from 'react'
import './SearchBox.scss'

const SearchBox = ({searchTerm, handleInput, searchCount}) => {

  let searchResultText = searchCount === 1 ? 'Found 1 track' : `Found ${searchCount} tracks`
  
  return (
    <form className='search-container'>
        <input type="text" 
        placeholder="Search tracks by artist, title or genre" 
        value={searchTerm} 
        onInput={handleInput}
        className='searchbox'/>
        <p className='results-message'>{searchResultText}</p>
    </form>
  )
}

export default SearchBox