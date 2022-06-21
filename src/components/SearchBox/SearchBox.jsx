import React from 'react'
import './SearchBox.scss'

const SearchBox = ({searchTerm, handleInput, label, placeholder}) => {

  
  return (
    <form className='search-container'>
      <label htmlFor="myLabel"> {label}
        <input 
          type="text" 
          placeholder={placeholder} 
          value={searchTerm} 
          onInput={handleInput}
          className='searchbox'/>
      </label>
    </form>
  )
}

export default SearchBox